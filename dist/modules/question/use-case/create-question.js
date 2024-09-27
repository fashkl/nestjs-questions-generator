"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestionUseCase = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../common");
let CreateQuestionUseCase = class CreateQuestionUseCase {
    constructor(answerRepository, questionRepository, userRepository, aIChatGenerator) {
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
        this.userRepository = userRepository;
        this.aIChatGenerator = aIChatGenerator;
        this.NUMBER_OF_QUESTIONS_REQUESTS = 3;
    }
    async execute(createQuestionDto) {
        const user = await this.userRepository.findById(createQuestionDto.authorId);
        if (!user)
            throw new common_1.NotFoundException('Author not found');
        const encodedQuestion = encodeURIComponent(createQuestionDto.content);
        const AIAnswers = await this.aIChatGenerator.ask(`Generate ${this.NUMBER_OF_QUESTIONS_REQUESTS} different answers for the question "${encodedQuestion}". One of these answers must be the correct answer. Follow this formar [{text: 'Answer', correct: true/false}], it will be an array of objects. Do not provide the answers as a list. Remove any space or breakline that the response can have, send it as raw as possible`);
        const formatedAnswer = AIAnswers.text.trim();
        const regex = /\[([^\]]*)\]/;
        const match = formatedAnswer.match(regex);
        if (!match)
            throw new common_1.BadRequestException('Generated answers are not compatible');
        try {
            const jsonArrayString = `[${match[1]}]`;
            const answers = JSON.parse(jsonArrayString);
            const question = await this.questionRepository.create({
                content: createQuestionDto.content,
                author: {
                    connect: {
                        id: user.id,
                    },
                },
            });
            if (answers.length < this.NUMBER_OF_QUESTIONS_REQUESTS)
                throw new common_1.BadRequestException(`It was not possible to generate the amount (${this.NUMBER_OF_QUESTIONS_REQUESTS}) of answers requested`);
            for (const answerData of answers) {
                await this.answerRepository.create({
                    content: answerData.text,
                    correct: answerData.correct,
                    question: {
                        connect: {
                            id: question.id,
                        },
                    },
                });
            }
            return this.questionRepository.findById(question.id);
        }
        catch (e) {
            throw new common_1.BadRequestException('Was not possible to register');
        }
    }
};
CreateQuestionUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [common_2.AnswerRepository,
        common_2.QuestionRepository,
        common_2.UserRepository,
        common_2.AIChatGenerator])
], CreateQuestionUseCase);
exports.CreateQuestionUseCase = CreateQuestionUseCase;
//# sourceMappingURL=create-question.js.map