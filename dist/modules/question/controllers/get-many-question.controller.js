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
exports.GetManyQuestionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const question_dto_1 = require("../dto/question.dto");
const get_many_questions_1 = require("../use-case/get-many-questions");
let GetManyQuestionsController = class GetManyQuestionsController {
    constructor(getManyQuestionsUseCase) {
        this.getManyQuestionsUseCase = getManyQuestionsUseCase;
    }
    handle() {
        return this.getManyQuestionsUseCase.execute();
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: question_dto_1.QuestionDto, isArray: true }),
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GetManyQuestionsController.prototype, "handle", null);
GetManyQuestionsController = __decorate([
    (0, common_1.Controller)('/question'),
    (0, swagger_1.ApiTags)('question'),
    __metadata("design:paramtypes", [get_many_questions_1.GetManyQuestionsUseCase])
], GetManyQuestionsController);
exports.GetManyQuestionsController = GetManyQuestionsController;
//# sourceMappingURL=get-many-question.controller.js.map