import { Prisma, User } from '@prisma/client';
import { UserRepository } from '../../repository/user.repositoy';
import { PrismaService } from '../prisma.service';
export declare class PrismaUserRepository implements UserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    findMany(): Promise<User[]>;
    create(data: Prisma.UserCreateInput): Promise<{
        id: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: Prisma.UserUpdateInput): Promise<User>;
    delete(id: string): Promise<void>;
}
