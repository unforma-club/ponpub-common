export interface UserPayload {
    id: string;
    email: string;
    role: number;
    name: string;
    image?: string | null;
}

export type UserRole =
    | "guest"
    | "user"
    | "author"
    | "admin"
    | "owner"
    | "super";
