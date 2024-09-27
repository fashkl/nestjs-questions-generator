import { Question } from '@prisma/client';
export declare class QuestionDto implements Question {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: string;
}
