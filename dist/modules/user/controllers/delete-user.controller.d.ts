import { DeleteUserUseCase } from '../use-case/delete-user';
export declare class DeleteUserController {
    private deleteUserUseCase;
    constructor(deleteUserUseCase: DeleteUserUseCase);
    handle(id: string): Promise<void>;
}
