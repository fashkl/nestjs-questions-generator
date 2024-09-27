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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuestionByIdController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const question_dto_1 = require("../dto/question.dto");
const get_question_by_id_1 = require("../use-case/get-question-by-id");
let GetQuestionByIdController = class GetQuestionByIdController {
    constructor(getQuestionByIdUseCase) {
        this.getQuestionByIdUseCase = getQuestionByIdUseCase;
    }
    handle(id) {
        return this.getQuestionByIdUseCase.execute(id);
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: question_dto_1.QuestionDto }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GetQuestionByIdController.prototype, "handle", null);
GetQuestionByIdController = __decorate([
    (0, common_1.Controller)('/question'),
    (0, swagger_1.ApiTags)('question'),
    __metadata("design:paramtypes", [get_question_by_id_1.GetQuestionByIdUseCase])
], GetQuestionByIdController);
exports.GetQuestionByIdController = GetQuestionByIdController;
//# sourceMappingURL=get-question-by-id.controller.js.map