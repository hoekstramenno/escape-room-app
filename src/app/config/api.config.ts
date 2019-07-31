import { EnvironmentVariables } from '../../environments/environment.interface';

export class ApiConfig {

    protected schema: string;
    protected hostname: string;
    protected namespace: string;

    public pinTimeout: number;
    public pinMaxAttempts: number;

    constructor(env: EnvironmentVariables) {
        this.schema = env.api.schema;
        this.hostname = env.api.hostname;
        this.namespace = env.api.namespace;
        this.pinTimeout = env.config.PIN_TIMEOUT_MINUTES;
        this.pinMaxAttempts = env.config.PIN_MAX_INVALID_ATTEMPTS
    }

    get origin(): string {
        return this.stripTrailingSlash(`${this.schema}://${this.hostname}`);
    }

    public getPinMaxAttempts():number {
        return this.pinMaxAttempts;
    }

    public getPinTimeout():number {
        return this.pinTimeout;
    }

    get apiUrl(): string {
        return this.stripTrailingSlash(`${this.schema}://${this.hostname}/${this.namespace}`);
    }

    protected stripTrailingSlash(url: string): string {
        return url.replace(/\/$/, '');
    }
}
