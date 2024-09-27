import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repositoy';
import { PrismaUserRepository } from './prisma/repository/prisma-user.repository';
import { PrismaService } from './prisma/prisma.service';
import { QuestionRepository } from './repository/question.repositoy';
import { PrismaQuestionRepository } from './prisma/repository/prisma-question.repository';
import { AnswerRepository } from './repository/answer.repositoy';
import { PrismaAnswerRepository } from './prisma/repository/prisma-answer.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: QuestionRepository,
      useClass: PrismaQuestionRepository,
    },
    {
      provide: AnswerRepository,
      useClass: PrismaAnswerRepository,
    },
  ],
  exports: [
    PrismaService,
    UserRepository,
    QuestionRepository,
    AnswerRepository,
  ],
})
export class DatabaseModule {}
