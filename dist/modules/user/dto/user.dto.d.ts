import { User } from '@prisma/client';
export declare class UserDto implements User {
    id: string;
    username: string;
    password: string | null;
    createdAt: Date;
    updatedAt: Date;
}
