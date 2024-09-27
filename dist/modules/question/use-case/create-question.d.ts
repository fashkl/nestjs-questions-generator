import { CreateQuestionDto } from '../dto/create-question.dto';
import { AIChatGenerator, AnswerRepository, QuestionRepository, UserRepository } from '../../common';
export declare class CreateQuestionUseCase {
    private readonly answerRepository;
    private readonly questionRepository;
    private readonly userRepository;
    private readonly aIChatGenerator;
    private NUMBER_OF_QUESTIONS_REQUESTS;
    constructor(answerRepository: AnswerRepository, questionRepository: QuestionRepository, userRepository: UserRepository, aIChatGenerator: AIChatGenerator);
    execute(createQuestionDto: CreateQuestionDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        authorId: string;
    }>;
}
