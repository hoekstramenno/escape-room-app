import { ApiResponse } from './api-response';
import { AppUser } from '../user/app-user';

export class RegisterApiResponse extends ApiResponse {
    data: {
        user: AppUser
    };
}
