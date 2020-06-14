"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBase = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.ButtonBase = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 1rem;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: ", ";\n  border-radius: ", ";\n  opacity: ", ";\n\n  pointer-events: ", ";\n  cursor: pointer;\n  font-weight: ", ";\n  border-width: 0;\n  padding: 0.5rem 1rem;\n\n  :focus {\n    outline: none;\n  }\n"], ["\n  font-size: 1rem;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: ", ";\n  border-radius: ", ";\n  opacity: ",
    ";\n\n  pointer-events: ",
    ";\n  cursor: pointer;\n  font-weight: ", ";\n  border-width: 0;\n  padding: 0.5rem 1rem;\n\n  :focus {\n    outline: none;\n  }\n"])), function (props) { return props.fluid && "100%"; }, function (props) { return props.theme.borderRadius; }, function (props) {
    return props.state === "disabled" || props.state === "loading" ? 0.75 : 1;
}, function (props) {
    return (props.state === "disabled" || props.state === "loading") && "none";
}, function (props) { return props.theme.font.fontWeightBold; });
var templateObject_1;
//# sourceMappingURL=button-base.js.map