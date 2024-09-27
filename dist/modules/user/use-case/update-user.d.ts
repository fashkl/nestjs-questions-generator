import { UpdateUserDto } from '../dto';
import { UserRepository } from '../../common';
export declare class UpdateUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(id: string, updateUserDto: UpdateUserDto): Promise<{
        username: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
