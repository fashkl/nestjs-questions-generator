import { UpdateUserDto } from '../dto/update-user.dto';
import { UpdateUserUseCase } from '../use-case/update-user';
export declare class UpdateUserController {
    private updateUserUseCase;
    constructor(updateUserUseCase: UpdateUserUseCase);
    handle(id: any, updateUserDto: UpdateUserDto): Promise<{
        username: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
