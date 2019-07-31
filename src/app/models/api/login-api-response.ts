import { ApiResponse } from './api-response';
import { AppUser } from '../user/app-user';

export class LoginApiResponse extends ApiResponse {

    data: {
        user: AppUser
    };

}
