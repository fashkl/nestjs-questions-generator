import { GetManyUsersUseCase } from '../use-case/get-many-users';
export declare class GetManyUsersController {
    private getManyUsersUseCase;
    constructor(getManyUsersUseCase: GetManyUsersUseCase);
    handle(): Promise<{
        username: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
