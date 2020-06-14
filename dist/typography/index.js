"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.H3 = exports.H2 = exports.H1 = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.H1 = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (props) { return props.theme.font.typography.header1Size; }, function (props) { return props.theme.font.fontWeightRegular; });
exports.H2 = styled_components_1.default.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (props) { return props.theme.font.typography.header2Size; }, function (props) { return props.theme.font.fontWeightRegular; });
exports.H3 = styled_components_1.default.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (props) { return props.theme.font.typography.header3Size; }, function (props) { return props.theme.font.fontWeightRegular; });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map