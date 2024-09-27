import { UserRepository } from '../../common';
export declare class DeleteUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(id: string): Promise<void>;
}
