import { EnvironmentVariables } from '../../environments/environment.interface';

export class ApiConfig {

    protected schema: string;
    protected hostname: string;
    protected namespace: string;

    constructor(env: EnvironmentVariables) {
        this.schema = env.api.schema;
        this.hostname = env.api.hostname;
        this.namespace = env.api.namespace;
    }

    get origin(): string {
        return this.stripTrailingSlash(`${this.schema}://${this.hostname}`);
    }

    get apiUrl(): string {
        return this.stripTrailingSlash(`${this.schema}://${this.hostname}/${this.namespace}`);
    }

    protected stripTrailingSlash(url: string): string {
        return url.replace(/\/$/, '');
    }
}
