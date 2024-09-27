"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    DATABASE_URL: zod_1.z.string().url(),
    OPENAI_API_KEY: zod_1.z.string(),
    PORT: zod_1.z.coerce.number().optional().default(3000),
    NODE_ENV: zod_1.z.coerce.string().optional().default('development'),
});
//# sourceMappingURL=env.js.map