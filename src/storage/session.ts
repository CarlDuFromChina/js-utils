const SessionStorage = {
  get(name: string): string | null {
    if (name && window.sessionStorage) {
      var val = window.sessionStorage.getItem(name);
      if (!val) return null;
      return val;
    } else return null;
  },
  put(name: string, data: string): void {
    if (name && window.sessionStorage) {
      window.sessionStorage.setItem(name, data);
    }
  },
  remove(name: string): void {
    if (name && window.sessionStorage) {
      window.sessionStorage.removeItem(name);
    }
  },
  clear(): void {
    window.sessionStorage.clear();
  }
};

export default SessionStorage;
