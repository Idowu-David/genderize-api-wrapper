"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const classify_route_1 = __importDefault(require("../src/routes/classify.route"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("API IS LIVE");
});
app.use("/api/classify", classify_route_1.default);
// app.listen(PORT, () => {
//   console.log(`Classify server running on http://localhost:${PORT}`);
// });
exports.default = app;
//# sourceMappingURL=app.js.map