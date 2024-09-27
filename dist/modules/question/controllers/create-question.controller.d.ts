import { CreateQuestionDto } from '../dto/create-question.dto';
import { CreateQuestionUseCase } from '../use-case/create-question';
export declare class CreateQuestionController {
    private createQuestionUseCase;
    constructor(createQuestionUseCase: CreateQuestionUseCase);
    handle(createQuestionDto: CreateQuestionDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: string;
    }>;
}
