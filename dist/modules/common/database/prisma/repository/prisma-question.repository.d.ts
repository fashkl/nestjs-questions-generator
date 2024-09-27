import { Prisma, Question } from '@prisma/client';
import { QuestionRepository } from '../../repository/question.repositoy';
import { PrismaService } from '../prisma.service';
export declare class PrismaQuestionRepository implements QuestionRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<Question | null>;
    findMany(): Promise<Question[]>;
    create(data: Prisma.QuestionCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: string;
    }>;
    delete(id: string): Promise<void>;
}
