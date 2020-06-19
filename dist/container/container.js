"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 16px;\n"], ["\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 16px;\n"])));
function Container(props) {
    var children = props.children;
    return (react_1.default.createElement(Root, null, children));
}
exports.Container = Container;
var templateObject_1;
//# sourceMappingURL=container.js.map