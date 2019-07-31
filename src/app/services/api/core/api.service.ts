import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

import { ApiResponse } from '../../../models/models';
import { EnvironmentVariables } from '../../../../environments/environment.interface';
import { ApiConfig } from '../../../config/api.config';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    baseUrl: string;

    constructor(
        protected http: HttpClient,
        protected platform: Platform,
        protected router: Router,
    ) {
    }

    async setup(env: EnvironmentVariables) {
        const apiConfig = new ApiConfig(env);
        this.baseUrl = apiConfig.apiUrl;
    }

    async get(route: string, params?: any, token?: string): Promise<ApiResponse> {
        return await this.request('get', route, params, token);
    }

    async post(route: string, params?: any, token?: string): Promise<ApiResponse> {
        return await this.request('post', route, params, token);
    }

    async patch(route: string, params?: any, token?: string): Promise<ApiResponse> {
        return await this.request('patch', route, params, token);
    }

    async delete(route: string, params?: any, token?: string): Promise<ApiResponse> {
        return await this.request('delete', route, params, token);
    }

    protected async request(method: 'get' | 'post' | 'patch' | 'delete', route: string, params?: any, token?: string): Promise<ApiResponse> {
        const url = `${this.baseUrl}/${route}`;
        let headers = new HttpHeaders();
        if (token) {
            headers = headers.append('Authorization', `Bearer ${token}`);
        }

        let request;
        switch (method) {
            case 'get':
                request = this.http.get<ApiResponse>(url, {params, headers});
                break;

            case 'post':
                request = this.http.post<ApiResponse>(url, params, {headers});
                break;

            case 'patch':
                request = this.http.patch<ApiResponse>(url, params, {headers});
                break;

            case 'delete':
                request = this.http.delete<ApiResponse>(url, {params, headers});
                break;
        }

        return new Promise<ApiResponse>((resolve) => {
            request.subscribe(
                (response: ApiResponse) => {
                    resolve(response);
                },
                e => {
                    console.log(e.status);
                    // if ((e.status === 401 || e.status === 403) && route != 'security/login') {
                    //     this.router.navigate(['/auth/logout'], {
                    //         replaceUrl: true,
                    //         queryParams: {
                    //             message: 'Je bent uitgelogd. Log opnieuw in.',
                    //             return: this.router.url + location.search,
                    //         }
                    //     });
                    //     if (window.cordova) {
                    //         navigator['splashscreen'].hide();
                    //     }
                    // } else {
                    //     const parsedErrors = ApiService.getParsedErrors(e);
                    //     if (parsedErrors) {
                    //         reject(new Error(parsedErrors.join('\n') || 'Fout bij verbinden met de server.'));
                    //     } else {
                    //         if (e.error.error) {
                    //             e.error = e.error.error;
                    //         }
                    //         reject(new Error(e.error.message || 'Fout bij verbinden met de server.'));
                    //     }
                    // }
                }
            );
        });
    }

    static getParsedErrors(errorResponse) {
        if (!errorResponse || !errorResponse.error || !errorResponse.error.errors || !errorResponse.error.errors.length) {
            return null;
        }
        const parsedErrors = [];
        Object.keys(errorResponse.error.errors).forEach(key => {
            const errorItem = errorResponse.error.errors[key];
            if (errorItem.constructor === Array) {
                errorItem.forEach(errorMessage => {
                    parsedErrors.push(errorMessage);
                });
            }
        });

        return parsedErrors;
    }

}
