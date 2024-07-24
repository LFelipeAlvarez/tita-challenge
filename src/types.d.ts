export type ApiResponse<T> = {
    data: T[];
    total: number;
    page: number;
    limit: number;
}

export type ApiError = {
    error: string
}

export type User = {
    name: string,
    picture: string
}


export type PostsState = {
    posts: Post[];
    loading: boolean;
    error: ApiError | null;
    currentTag: string
}

export type OwnerState = {
    owner: OwnerInfo | null;
    loading: boolean;
    error: ApiError | null;
    showOwner: boolean;
}

export type CommentsState = {
    comments: Comment[];
    loading: boolean;
    error: ApiError | null;
    showComments: boolean;
}

export type PostT = {
    id: string;
    image: string;
    likes: number;
    tags: string[];
    text: string;
    publishDate: string;
    updatedDate: string;
    owner: Owner;
    comments: Comment[]
    totalComments?: number;
}

export type OwnerInfo = {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    location: Location;
    registerDate: string;
    updatedDate: string;
}

export type Location = {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
}

export type Comment = {
    id: string;
    message: string;
    owner: Owner;
    post: string;
    publishDate: string;
}

export type Owner = {
    id: string;
    title?: string;
    firstName: string;
    lastName: string;
    picture?: string;
}

export type GooglePayload = {
    iss: string,
    azp: string,
    aud: string,
    sub: string,
    email: string,
    email_verified: boolean,
    nbf: number,
    name: string,
    picture: string,
    given_name: string,
    family_name: string,
    iat: number,
    exp: number,
    jti: string
}