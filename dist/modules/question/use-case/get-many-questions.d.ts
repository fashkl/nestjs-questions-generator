import { QuestionRepository } from '../../common';
export declare class GetManyQuestionsUseCase {
    private readonly questionRepository;
    constructor(questionRepository: QuestionRepository);
    execute(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: string;
    }[]>;
}
