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
exports.GetManyQuestionsUseCase = void 0;
const common_1 = require("../../common");
const common_2 = require("@nestjs/common");
let GetManyQuestionsUseCase = class GetManyQuestionsUseCase {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }
    async execute() {
        const questions = await this.questionRepository.findMany();
        return questions;
    }
};
GetManyQuestionsUseCase = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [common_1.QuestionRepository])
], GetManyQuestionsUseCase);
exports.GetManyQuestionsUseCase = GetManyQuestionsUseCase;
//# sourceMappingURL=get-many-questions.js.map