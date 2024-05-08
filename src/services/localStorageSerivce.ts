type Result =
  | { success: boolean; value: unknown }
  | { success: boolean; error: Error };

interface IStorageRepo {
  store(key: string, val: unknown): void;
  get(key: string): Result;
  remove(key: string): void;
}

export default class StorageService implements IStorageRepo {
  store(key: string, value: unknown) {
    let storedPayload = '';
    if (value === null) {
      localStorage.removeItem(key);
    }
    else {
      storedPayload = JSON.stringify(value);
    }
    localStorage.setItem(key, storedPayload);
  }
  get(key: string) {
    const item = localStorage.getItem(key);
    if (item === null) {
      return {
        success: false,
        error: new Error(`Item with key "${key}" does not exist`)
      };
    }

    let value: unknown;

    try {
      value = JSON.parse(item);
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          error: error
        };
      }
      return {
        success: false,
        error: new Error('Unknown error')
      };
    }

    return {
      success: true,
      value: value
    };
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
}