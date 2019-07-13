export type Schema = 'http' | 'https';

export interface EnvironmentVariables {

    /**
     * Is this a production environment?
     */
    production: boolean;

    /**
     * Info about the Angular application environment
     */
    self: {
        schema: Schema
        hostname: string
    };

    /**
     * API Location info
     */
    api: {
        schema: Schema
        hostname: string
        namespace: string | null
    };
}
