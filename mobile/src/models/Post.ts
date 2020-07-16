import User from "./User";

export default interface Post {
    id: string;
    userId: string;
    message: string;
    user?: User;
    createdAt?: Date;
    updatedAt?: Date;
}