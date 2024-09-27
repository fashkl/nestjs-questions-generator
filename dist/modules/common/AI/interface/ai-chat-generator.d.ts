import { ChatMessage } from 'chatgpt';
export declare abstract class AIChatGenerator {
    abstract ask(question: string): Promise<ChatMessage | null>;
}
