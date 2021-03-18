import * as core from 'common';

function init(url) {
  window.WebSocket = window.WebSocket || window.MozWebSocket;
  if (core.isNil(window.WebSocket)) {
    console.error('浏览器不支持WebSocket');
    throw new Error('浏览器不支持WebSocket');
  }
  return new window.WebSocket(url);
}

export default function Socket(url) {
  const client = init(url);
  client.onopen = e => {
    if (core.isFunction(this.onopen)) {
      this.onopen(e);
    }
  };
  client.onmessage = e => {
    if (core.isFunction(this.onmessage)) {
      this.onmessage(e);
    }
  };
  client.onerror = e => {
    if (core.isFunction(this.onerror)) {
      this.onerror(e);
    }
  };
  client.onclose = e => {
    if (core.isFunction(this.onclose)) {
      this.onclose(e);
    }
  };
  return client;
}
