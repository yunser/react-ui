"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uploader = void 0;
var react_1 = __importDefault(require("react"));
function Uploader() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("input", { type: "file" }),
        "\u6587\u4EF6\u4E0A\u4F20"));
}
exports.Uploader = Uploader;
//# sourceMappingURL=uploader.js.map