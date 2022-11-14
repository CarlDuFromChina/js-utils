const Cookie = {
  get(name: string): string | null {
    var val = this.getRaw(name);
    if (!val) {
      return null;
    }
    return unescape(val);
  },
  getRaw(check_name: string) {
    var a_all_cookies = document.cookie.split(';');
    var a_temp_cookie: any = '';
    var cookie_name = '';
    var cookie_value = '';
    var b_cookie_found = false;
    for (var i = 0; i < a_all_cookies.length; i++) {
      a_temp_cookie = a_all_cookies[i].split('=');
      cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
      if (cookie_name == check_name) {
        b_cookie_found = true;
        if (a_temp_cookie.length > 1) {
          cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
        }
        return cookie_value;
      }
      a_temp_cookie = null;
      cookie_name = '';
    }
    if (!b_cookie_found) {
      return null;
    }
    return null;
  },
  put(name: string, data: string, domain: string, expires: Date, https = false): void {
    if (name) {
      document.cookie =
        name +
        '=' +
        escape(data) +
        (!!expires ? ';expires=' + expires.toUTCString() : '') +
        (domain ? ';domain=' + domain : '') +
        (!https ? ';secure' : '');
    }
  },
  remove(name: string, domain: string): void {
    if (name && this.getRaw(name)) document.cookie = name + '=' + (domain ? ';domain=' + domain : '') + ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
  },
  clear(domain: string): void {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var arr = /^[^=]+/.exec(cookies[i]);
      if (arr != null) {
        document.cookie = arr[0] + '=' + (domain ? ';domain=' + domain : '') + ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
      }
    }
  }
};

export default Cookie;
