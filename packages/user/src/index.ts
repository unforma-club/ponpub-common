import type { UserPayload } from "./types";
const GUEST: UserPayload = {
    id: "guest",
    email: "guest@guest.com",
    role: 0,
    name: "Guest User",
};

const Bangsit = "Bangsit";

export * from "./types";
export { GUEST, Bangsit };
