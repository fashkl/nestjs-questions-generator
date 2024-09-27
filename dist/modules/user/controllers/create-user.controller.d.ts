import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserUseCase } from '../use-case/create-user';
export declare class CreateUserController {
    private createUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase);
    handle(createUserDto: CreateUserDto): Promise<{
        username: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
