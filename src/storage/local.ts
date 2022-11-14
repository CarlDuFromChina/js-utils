const LocalStorage = {
  get(name: string): string | null {
    if (name && window.localStorage) {
      var val = window.localStorage.getItem(name);
      if (!val) return null;
      return val;
    } else return null;
  },
  put(name: string, data: string): void {
    if (name && window.localStorage) {
      window.localStorage.setItem(name, data);
    }
  },
  remove(name: string): void {
    if (name && window.localStorage) {
      window.localStorage.removeItem(name);
    }
  },
  clear(): void {
    window.localStorage.clear();
  }
};

export default LocalStorage;