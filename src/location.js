
function getLocationByWeixin() {
  return new Promise((resolve, reject) => {
    try {
      window.wx.getLocation({
        type: 'wgs84',
        success(res) {
          resolve({
            latitude: res.latitude, // 纬度，浮点数，范围为90 ~ -90
            longitude: res.longitude // 经度，浮点数，范围为180 ~ -180。
          });
        },
        fail(error) {
          reject(error);
        },
        cancel(error) {
          reject(error);
        }
      });
    } catch (error) {
      reject(error);
    }

    setTimeout(reject, 3000);
  });
}

function getLocationByGeoAPI() {
  return new Promise((resolve, reject) => {
    try {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        reject,
        {
          timeout: 3000
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

function getLocation() {
  if (window.wx && window.wx.getLocation) {
    return getLocationByWeixin();
  }
  return getLocationByGeoAPI();
}

export default {
  getLocationByGeoAPI,
  getLocationByWeixin,
  getLocation
}