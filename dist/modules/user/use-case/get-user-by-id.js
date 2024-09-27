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
exports.GetUserByIdUseCase = void 0;
const common_1 = require("../../common");
const common_2 = require("@nestjs/common");
let GetUserByIdUseCase = class GetUserByIdUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new common_2.NotFoundException();
        }
        return user;
    }
};
GetUserByIdUseCase = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [common_1.UserRepository])
], GetUserByIdUseCase);
exports.GetUserByIdUseCase = GetUserByIdUseCase;
//# sourceMappingURL=get-user-by-id.js.map