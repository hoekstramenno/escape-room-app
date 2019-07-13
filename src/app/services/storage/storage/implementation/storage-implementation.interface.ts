export interface StorageImplementationInterface {

    isAvailable(): Promise<boolean>;

    getItem(key: string): Promise<any>;

    setItem(key: string, value: any): Promise<boolean>;

    removeItem(key: string): Promise<boolean>;

}
