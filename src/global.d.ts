declare global {
  interface Window {
    wx: any,
    MozWebSocket: any
  }

  interface Function {
    method(name: string, func: Function): any
  }
  
  interface String {
    toText(): string
    toBase64String(): string
    toStringFromBase64(): string
    trimLast(c?: string): string
    distinct<T>(): Array<T>
  }

  interface Array<T> {
    chunk(size?: number): Array<T>
    distinct(): Array<T>
  }
}

export {};