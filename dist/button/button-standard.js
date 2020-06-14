"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStandard = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var button_base_1 = require("./button-base");
var utility_1 = require("./utility");
exports.ButtonStandard = styled_components_1.default(button_base_1.ButtonBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  border-bottom: 2px solid ", ";\n\n  :hover {\n    background-color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n    border-bottom: 2px solid ", ";\n  }\n"], ["\n  color: ", ";\n  background-color: ", ";\n  border-bottom: 2px solid ", ";\n\n  :hover {\n    background-color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n    border-bottom: 2px solid ", ";\n  }\n"])), function (props) { return props.theme.colors.white; }, function (props) { return utility_1.emphasisColor(props); }, function (props) { return utility_1.buttonBottomColor(utility_1.emphasisColor(props)); }, function (props) { return utility_1.hoverColor(utility_1.emphasisColor(props)); }, function (props) { return utility_1.activeColor(utility_1.emphasisColor(props)); }, function (props) { return utility_1.emphasisColor(props); });
var templateObject_1;
//# sourceMappingURL=button-standard.js.map