import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from '../dto';
import { UserRepository } from '../../common';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException();
    }

    try {
      const updatedData = {
        ...user,
        ...updateUserDto,
      };

      return this.userRepository.update(id, updatedData);
    } catch (e) {
      throw new BadRequestException('Was not possible to register');
    }
  }
}
