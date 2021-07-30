/* eslint-disable @typescript-eslint/no-explicit-any */
export class StorageService {
  public saveOrUpdateItem<T = any>(key: string, data: T): void {
    if (typeof data === 'object')
      localStorage.setItem(key, JSON.stringify(data));
    else localStorage.setItem(key, `${data}`);
  }

  public getItem(key: string): string {
    return localStorage.getItem(key) || '';
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

export default StorageService;
