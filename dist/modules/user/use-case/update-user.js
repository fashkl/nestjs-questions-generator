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
exports.UpdateUserUseCase = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../common");
let UpdateUserUseCase = class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id, updateUserDto) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        try {
            const updatedData = Object.assign(Object.assign({}, user), updateUserDto);
            return this.userRepository.update(id, updatedData);
        }
        catch (e) {
            throw new common_1.BadRequestException('Was not possible to register');
        }
    }
};
UpdateUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [common_2.UserRepository])
], UpdateUserUseCase);
exports.UpdateUserUseCase = UpdateUserUseCase;
//# sourceMappingURL=update-user.js.map