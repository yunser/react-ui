"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
var Bg = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    height: 4px;\n    background: #999;\n"], ["\n    width: 100%;\n    height: 4px;\n    background: #999;\n"])));
var Bar = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    height: 100%;\n    background: #09c;\n"], ["\n    height: 100%;\n    background: #09c;\n"])));
function Progress(props) {
    var _a = props.value, value = _a === void 0 ? 0 : _a;
    return (react_1.default.createElement(Root, null,
        react_1.default.createElement(Bg, null,
            react_1.default.createElement(Bar, { style: { width: value + '%' } }))));
}
exports.Progress = Progress;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=progress.js.map