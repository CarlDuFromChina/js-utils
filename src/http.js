import * as sp from './common';

const axios = require('axios');

axios.defaults.timeout = 20000;
axios.defaults.withCredentials = true;
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `BasicAuth ${localStorage.getItem('Token') || ''
    }`;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    // 处理excel文件
    if (
      response.headers &&
      response.headers['content-type'] === 'application/octet-stream'
    ) {
      downloadUrl(`${baseUrl}\\${response.config.url}`);
      return Promise.resolve(true);
    }
    return Promise.resolve(response);
  },
  (error) => {
    if (error && error.response && error.response.status) {
      switch (error.response.status) {
        case 403:
          location.href = '/#/login';
          break;
        default:
          break;
      }
      return Promise.reject(error);
    }
  }
);

const baseUrl = localStorage.getItem('baseUrl');
if (sp.isNullOrEmpty(baseUrl)) {
  localStorage.setItem('baseUrl', window.location.origin);
} else {
  axios.defaults.baseURL = baseUrl;
}

// download url
const downloadUrl = (url) => {
  let iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = url;
  iframe.onload = function () {
    document.body.removeChild(iframe);
  };
  document.body.appendChild(iframe);
};

function _handleSuccess(res) {
  if (!res) return;

  if (!res.data) {
    return res.data;
  }

  if (res.data.ErrorCode === 0) {
    return res.data.Data || res.data;
  } else if (!sp.isNull(res.data.ErrorCode) && !sp.isNull(res.data.Message)) {
    return Promise.reject(new Error(res.data.Message));
  } else {
    return res.data;
  }
}

function _handleError(error) {
  if (error.response) {
    const { status, data } = error.response;
    let errorMessage;
    if (status === 401) {
      errorMessage = data || '您没有权限访问该资源';
    } else if (status === 403) {
      errorMessage = '请重新登录';
    } else if (status === 500) {
      errorMessage = '系统错误，请联系管理员';
    } else if (status === 404) {
      errorMessage = data || '未找到资源';
    } else {
      errorMessage = data;
    }
    return errorMessage;
  } else if (error.message) {
    return error.message;
  } else {
    return '系统错误，请联系管理员';
  }
}

export function get(url, config) {
  return new Promise(function (resolve, reject) {
    axios
      .get(url, config)
      .then((res) => {
        resolve(_handleSuccess(res));
      })
      .catch((err) => {
        reject(_handleError(err));
      });
  });
}

export function post(url, data, config) {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, data, config)
      .then(function (res) {
        resolve(_handleSuccess(res));
      })
      .catch(function (err) {
        reject(_handleError(err));
      });
  });
}
