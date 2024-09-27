import { UserRepository } from '../../common';
import { CreateUserDto } from '../dto';
export declare class CreateUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(createUserDto: CreateUserDto): Promise<{
        username: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
