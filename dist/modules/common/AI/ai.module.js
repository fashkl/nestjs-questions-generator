"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIModule = void 0;
const common_1 = require("@nestjs/common");
const ai_chat_generator_1 = require("./interface/ai-chat-generator");
const ai_chat_1 = require("./ai-chat");
const env_1 = require("../env");
let AIModule = class AIModule {
};
AIModule = __decorate([
    (0, common_1.Module)({
        imports: [env_1.EnvModule],
        providers: [
            {
                provide: ai_chat_generator_1.AIChatGenerator,
                useClass: ai_chat_1.AIChat,
            },
        ],
        exports: [ai_chat_generator_1.AIChatGenerator],
    })
], AIModule);
exports.AIModule = AIModule;
//# sourceMappingURL=ai.module.js.map