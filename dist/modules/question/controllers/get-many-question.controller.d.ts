import { GetManyQuestionsUseCase } from '../use-case/get-many-questions';
export declare class GetManyQuestionsController {
    private getManyQuestionsUseCase;
    constructor(getManyQuestionsUseCase: GetManyQuestionsUseCase);
    handle(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: string;
    }[]>;
}
