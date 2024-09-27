import { OnModuleInit } from '@nestjs/common';
import { ChatMessage } from 'chatgpt';
import { EnvService } from '../env';
import { AIChatGenerator } from './interface/ai-chat-generator';
export declare class AIChat implements AIChatGenerator, OnModuleInit {
    private envService;
    private API;
    constructor(envService: EnvService);
    onModuleInit(): Promise<void>;
    ask(question: string): Promise<ChatMessage | null>;
}
