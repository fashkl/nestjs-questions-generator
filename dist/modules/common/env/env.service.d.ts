import { ConfigService } from '@nestjs/config';
import { Env } from './env';
export declare class EnvService {
    private configService;
    constructor(configService: ConfigService<Env, true>);
    get<T extends keyof Env>(key: T): import("@nestjs/config").PathValue<{
        DATABASE_URL?: string;
        OPENAI_API_KEY?: string;
        PORT?: number;
        NODE_ENV?: string;
    }, T>;
}
