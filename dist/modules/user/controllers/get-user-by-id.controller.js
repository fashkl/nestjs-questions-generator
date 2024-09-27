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
exports.GetUserByIdController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../dto/user.dto");
const get_user_by_id_1 = require("../use-case/get-user-by-id");
let GetUserByIdController = class GetUserByIdController {
    constructor(getUserByIdUseCase) {
        this.getUserByIdUseCase = getUserByIdUseCase;
    }
    handle(id) {
        return this.getUserByIdUseCase.execute(id);
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: user_dto_1.UserDto }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GetUserByIdController.prototype, "handle", null);
GetUserByIdController = __decorate([
    (0, common_1.Controller)('/user'),
    (0, swagger_1.ApiTags)('user'),
    __metadata("design:paramtypes", [get_user_by_id_1.GetUserByIdUseCase])
], GetUserByIdController);
exports.GetUserByIdController = GetUserByIdController;
//# sourceMappingURL=get-user-by-id.controller.js.map