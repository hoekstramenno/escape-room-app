import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { StorageImplementationInterface } from './storage-implementation.interface';


export class NativeStorageImplementation implements StorageImplementationInterface {

    private storage: NativeStorage;


    constructor() {
        if (window.cordova) {
            this.storage = new NativeStorage();
        }
    }

    async isAvailable() {
        return !!window.cordova;
    }

    async getItem(key: string) {
        try {
            const data = await this.storage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            return null;
        }
    }

    async setItem(key: string, value: any) {
        await this.storage.setItem(key, JSON.stringify(value));
        return true;
    }

    async removeItem(key: string) {
        try {
            await this.storage.remove(key);
        } catch (e) {}
        return true;
    }

}
