
export class ApiResponse {
    current_page: number;
    data: any;
    first_page_url: string;
    from?: string;
    last_page: number;
    last_page_url: string;
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: number;
    to?:number;
    total: number;
}
