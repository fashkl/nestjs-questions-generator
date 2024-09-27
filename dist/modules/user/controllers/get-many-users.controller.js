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
exports.GetManyUsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../dto/user.dto");
const get_many_users_1 = require("../use-case/get-many-users");
let GetManyUsersController = class GetManyUsersController {
    constructor(getManyUsersUseCase) {
        this.getManyUsersUseCase = getManyUsersUseCase;
    }
    handle() {
        return this.getManyUsersUseCase.execute();
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: user_dto_1.UserDto, isArray: true }),
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GetManyUsersController.prototype, "handle", null);
GetManyUsersController = __decorate([
    (0, common_1.Controller)('/user'),
    (0, swagger_1.ApiTags)('user'),
    __metadata("design:paramtypes", [get_many_users_1.GetManyUsersUseCase])
], GetManyUsersController);
exports.GetManyUsersController = GetManyUsersController;
//# sourceMappingURL=get-many-users.controller.js.map