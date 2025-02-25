import { Injectable } from '@nestjs/common';
import { Prisma, Answer } from '@prisma/client';
import { AnswerRepository } from '../../repository/answer.repositoy';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAnswerRepository implements AnswerRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Answer | null> {
    const answer = await this.prisma.answer.findUnique({
      where: {
        id,
      },
    });

    if (!answer) {
      return null;
    }

    return answer;
  }

  async findMany(questionId: string): Promise<Answer[]> {
    return this.prisma.answer.findMany({
      where: {
        questionId,
      },
    });
  }

  async create(data: Prisma.AnswerCreateInput) {
    return this.prisma.answer.create({
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.answer.delete({
      where: {
        id,
      },
    });
  }
}
