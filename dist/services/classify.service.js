"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchClassifyData = void 0;
const axios_1 = __importDefault(require("axios"));
const fetchClassifyData = async (name) => {
    const classify = await axios_1.default.get("https://api.genderize.io", {
        params: { name },
        timeout: 3000,
    });
    return classify.data;
};
exports.fetchClassifyData = fetchClassifyData;
//# sourceMappingURL=classify.service.js.map