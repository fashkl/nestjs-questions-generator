"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIChat = void 0;
const common_1 = require("@nestjs/common");
const env_1 = require("../env");
let AIChat = class AIChat {
    constructor(envService) {
        this.envService = envService;
    }
    async onModuleInit() {
        const importDynamic = new Function('modulePath', 'return import(modulePath)');
        const { ChatGPTAPI } = await importDynamic('chatgpt');
        this.API = new ChatGPTAPI({
            apiKey: this.envService.get('OPENAI_API_KEY'),
        });
    }
    async ask(question) {
        try {
            return this.API.sendMessage(question);
        }
        catch (e) {
            throw new common_1.InternalServerErrorException('Was not possible to generate the answers');
        }
    }
};
AIChat = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [env_1.EnvService])
], AIChat);
exports.AIChat = AIChat;
//# sourceMappingURL=ai-chat.js.map