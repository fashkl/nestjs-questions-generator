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
exports.GetQuestionByIdUseCase = void 0;
const common_1 = require("../../common");
const common_2 = require("@nestjs/common");
let GetQuestionByIdUseCase = class GetQuestionByIdUseCase {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }
    async execute(id) {
        const question = await this.questionRepository.findById(id);
        if (!question) {
            throw new common_2.NotFoundException();
        }
        return question;
    }
};
GetQuestionByIdUseCase = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [common_1.QuestionRepository])
], GetQuestionByIdUseCase);
exports.GetQuestionByIdUseCase = GetQuestionByIdUseCase;
//# sourceMappingURL=get-question-by-id.js.map