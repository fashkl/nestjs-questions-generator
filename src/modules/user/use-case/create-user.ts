import { UserRepository } from '../../common';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from '../dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(createUserDto: CreateUserDto) {
    const isUsernameAvailable = await this.userRepository.findByUsername(
      createUserDto.username,
    );

    if (isUsernameAvailable) {
      throw new ConflictException('This username is already in use');
    }

    try {
      return this.userRepository.create(createUserDto);
    } catch (e) {
      throw new BadRequestException('Was not possible to register');
    }
  }
}
