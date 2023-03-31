//Post
export type PostDeleteResponse = {
    success?: string;
    url?: string;
    data?: Record<string, unknown>;
    error?: Record<string, never>;
};

//Get
export type GetResponseSuccessObject = {
    "date": string,
    "taskHour": string,
    "userId": string,
    "dayOfWeek": string,
    "description": string,
    "id": string
}
type ResponseErrorObject = { "message": ErrorMessages }
export type GetResponse = GetResponseSuccessObject[] | [] | ErrorMessages;
export type PostResponse = PostDeleteResponse | ErrorMessages;
//Errors
export enum ErrorMessages {
    NETWORK_ERROR = "Network Error",
    ACCESS_DENIED = "Access Denied",
    ACCESS_DENIEDII = "Request failed with status code 403",
    INTERNAL_SERVER_ERROR = "Request failed with status code 500",
    UNAUTHORIZED = "Request failed with status code 401",
    BAD_REQUEST = "Request failed with status code 400",
    NOT_FOUND = "Request failed with status code 404",
    NOT_FOUND_WEEK = "Request failed with status code 404 in week request",
    TOKEN_EXPIRED = "The incoming token has expired",
}

