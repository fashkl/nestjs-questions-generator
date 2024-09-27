"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const create_user_controller_1 = require("./controllers/create-user.controller");
const create_user_1 = require("./use-case/create-user");
const get_user_by_id_controller_1 = require("./controllers/get-user-by-id.controller");
const get_user_by_id_1 = require("./use-case/get-user-by-id");
const get_many_users_1 = require("./use-case/get-many-users");
const get_many_users_controller_1 = require("./controllers/get-many-users.controller");
const delete_user_controller_1 = require("./controllers/delete-user.controller");
const delete_user_1 = require("./use-case/delete-user");
const update_user_1 = require("./use-case/update-user");
const update_user_controller_1 = require("./controllers/update-user.controller");
const common_2 = require("../common");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            create_user_controller_1.CreateUserController,
            get_user_by_id_controller_1.GetUserByIdController,
            get_many_users_controller_1.GetManyUsersController,
            delete_user_controller_1.DeleteUserController,
            update_user_controller_1.UpdateUserController,
        ],
        imports: [common_2.DatabaseModule],
        providers: [
            create_user_1.CreateUserUseCase,
            get_user_by_id_1.GetUserByIdUseCase,
            get_many_users_1.GetManyUsersUseCase,
            delete_user_1.DeleteUserUseCase,
            update_user_1.UpdateUserUseCase,
        ],
        exports: [],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map