"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var IconWrap = styled_components_1.default.i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    /* padding-top: 64px; */\n"], ["\n    /* padding-top: 64px; */\n"])));
function Icon(props) {
    var className = props.className, name = props.name;
    return (react_1.default.createElement(IconWrap, { className: 'mu-icon material-icons ' + className }, name));
}
exports.Icon = Icon;
var templateObject_1;
//# sourceMappingURL=icon.js.map