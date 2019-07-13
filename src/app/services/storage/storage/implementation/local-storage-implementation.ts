import { StorageImplementationInterface } from './storage-implementation.interface';

export class LocalStorageImplementation implements StorageImplementationInterface {

    async isAvailable() {
        return true;
    }

    async getItem(key: string) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    async setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    async removeItem(key: string) {
        localStorage.removeItem(key);
        return true;
    }

}
