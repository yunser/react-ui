"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBasic = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var button_base_1 = require("./button-base");
var utility_1 = require("./utility");
exports.ButtonBasic = styled_components_1.default(button_base_1.ButtonBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  border: 2px solid ", ";\n\n  :active {\n    color: ", ";\n    border: 2px solid ", ";\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  border: 2px solid ", ";\n\n  :active {\n    color: ", ";\n    border: 2px solid ", ";\n  }\n"])), function (props) { return utility_1.emphasisColor(props); }, function (props) { return utility_1.emphasisColor(props); }, function (props) { return utility_1.darkerActiveColor(utility_1.emphasisColor(props)); }, function (props) { return utility_1.darkerActiveColor(utility_1.emphasisColor(props)); });
var templateObject_1;
//# sourceMappingURL=button-basic.js.map