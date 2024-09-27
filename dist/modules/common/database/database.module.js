"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const user_repositoy_1 = require("./repository/user.repositoy");
const prisma_user_repository_1 = require("./prisma/repository/prisma-user.repository");
const prisma_service_1 = require("./prisma/prisma.service");
const question_repositoy_1 = require("./repository/question.repositoy");
const prisma_question_repository_1 = require("./prisma/repository/prisma-question.repository");
const answer_repositoy_1 = require("./repository/answer.repositoy");
const prisma_answer_repository_1 = require("./prisma/repository/prisma-answer.repository");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: user_repositoy_1.UserRepository,
                useClass: prisma_user_repository_1.PrismaUserRepository,
            },
            {
                provide: question_repositoy_1.QuestionRepository,
                useClass: prisma_question_repository_1.PrismaQuestionRepository,
            },
            {
                provide: answer_repositoy_1.AnswerRepository,
                useClass: prisma_answer_repository_1.PrismaAnswerRepository,
            },
        ],
        exports: [
            prisma_service_1.PrismaService,
            user_repositoy_1.UserRepository,
            question_repositoy_1.QuestionRepository,
            answer_repositoy_1.AnswerRepository,
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map