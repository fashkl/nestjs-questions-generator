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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("../dto/create-user.dto");
const user_dto_1 = require("../dto/user.dto");
const create_user_1 = require("../use-case/create-user");
let CreateUserController = class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    handle(createUserDto) {
        try {
            const user = this.createUserUseCase.execute(createUserDto);
            return user;
        }
        catch (e) {
            if (e instanceof common_1.ConflictException) {
                throw new common_1.HttpException('This username is already in use', common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException('Was not possible to register', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: user_dto_1.UserDto }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], CreateUserController.prototype, "handle", null);
CreateUserController = __decorate([
    (0, common_1.Controller)('/user'),
    (0, swagger_1.ApiTags)('user'),
    __metadata("design:paramtypes", [create_user_1.CreateUserUseCase])
], CreateUserController);
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=create-user.controller.js.map