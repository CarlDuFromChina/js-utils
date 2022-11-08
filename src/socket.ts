import * as core from './common';

function init(url: string) {
  window.WebSocket = window.WebSocket || window.MozWebSocket;
  if (core.isNil(window.WebSocket)) {
    console.error('浏览器不支持WebSocket');
    throw new Error('浏览器不支持WebSocket');
  }
  return new window.WebSocket(url);
}

export default function Socket(url: string) {
  const client = init(url);
  return client;
}
