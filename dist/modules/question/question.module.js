"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionModule = void 0;
const common_1 = require("@nestjs/common");
const create_question_controller_1 = require("./controllers/create-question.controller");
const create_question_1 = require("./use-case/create-question");
const get_question_by_id_controller_1 = require("./controllers/get-question-by-id.controller");
const get_many_question_controller_1 = require("./controllers/get-many-question.controller");
const get_question_by_id_1 = require("./use-case/get-question-by-id");
const get_many_questions_1 = require("./use-case/get-many-questions");
const common_2 = require("../common");
let QuestionModule = class QuestionModule {
};
QuestionModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            create_question_controller_1.CreateQuestionController,
            get_question_by_id_controller_1.GetQuestionByIdController,
            get_many_question_controller_1.GetManyQuestionsController,
        ],
        imports: [common_2.DatabaseModule, common_2.AIModule],
        providers: [
            create_question_1.CreateQuestionUseCase,
            get_question_by_id_1.GetQuestionByIdUseCase,
            get_many_questions_1.GetManyQuestionsUseCase,
        ],
        exports: [],
    })
], QuestionModule);
exports.QuestionModule = QuestionModule;
//# sourceMappingURL=question.module.js.map