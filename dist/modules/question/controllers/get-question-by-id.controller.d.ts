import { GetQuestionByIdUseCase } from '../use-case/get-question-by-id';
export declare class GetQuestionByIdController {
    private getQuestionByIdUseCase;
    constructor(getQuestionByIdUseCase: GetQuestionByIdUseCase);
    handle(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: string;
    }>;
}
