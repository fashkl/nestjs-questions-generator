import { UserRepository } from '../../common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetManyUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    return this.userRepository.findMany();
  }
}
