import { Prisma, Answer } from '@prisma/client';
import { AnswerRepository } from '../../repository/answer.repositoy';
import { PrismaService } from '../prisma.service';
export declare class PrismaAnswerRepository implements AnswerRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<Answer | null>;
    findMany(questionId: string): Promise<Answer[]>;
    create(data: Prisma.AnswerCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        questionId: string;
        correct: boolean;
    }>;
    delete(id: string): Promise<void>;
}
