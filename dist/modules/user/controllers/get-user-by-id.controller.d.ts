import { GetUserByIdUseCase } from '../use-case/get-user-by-id';
export declare class GetUserByIdController {
    private getUserByIdUseCase;
    constructor(getUserByIdUseCase: GetUserByIdUseCase);
    handle(id: string): Promise<{
        username: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
