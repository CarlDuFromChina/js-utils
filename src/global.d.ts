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
    distinct(): Array
  }

  interface Array {
    chunk(size?: number): Array
    distinct(): Array
  }
}

export {};