"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var react_1 = __importDefault(require("react"));
function Tag(props) {
    var children = props.children;
    return (react_1.default.createElement("div", null, children));
}
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map