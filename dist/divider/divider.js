"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var DividerWrap = styled_components_1.default.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    /* color: #fff; */\n    background-color: rgba(0, 0, 0, .12);\n"], ["\n    /* color: #fff; */\n    background-color: rgba(0, 0, 0, .12);\n"])));
function Divider() {
    // const { children, color } = props
    return react_1.default.createElement(DividerWrap, null);
}
exports.Divider = Divider;
var templateObject_1;
//# sourceMappingURL=divider.js.map