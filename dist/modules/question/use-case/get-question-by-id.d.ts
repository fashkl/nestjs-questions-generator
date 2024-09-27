import { QuestionRepository } from '../../common';
export declare class GetQuestionByIdUseCase {
    private readonly questionRepository;
    constructor(questionRepository: QuestionRepository);
    execute(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: string;
    }>;
}
