"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionBar = void 0;
var React = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var borderLeft = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  > *:not(:first-child) {\n    border-left: 1px solid ", ";\n  }\n"], ["\n  > *:not(:first-child) {\n    border-left: 1px solid ", ";\n  }\n"])), function (props) { return props.theme.colors.secondary; });
var borderBottom = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  > *:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  > *:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n"])), function (props) { return props.theme.colors.secondary; });
var Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  justify-content: space-between;\n\n  border: ", ";\n  border-radius: ", ";\n  border-style: solid;\n  border-width: 1px;\n  border-color: ", ";\n\n  ", "\n\n  > * {\n    display: flex;\n    justify-content: center;\n    flex: 1 1 auto;\n    padding: 0.25rem;\n  }\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  justify-content: space-between;\n\n  border: ", ";\n  border-radius: ", ";\n  border-style: solid;\n  border-width: 1px;\n  border-color: ", ";\n\n  ", "\n\n  > * {\n    display: flex;\n    justify-content: center;\n    flex: 1 1 auto;\n    padding: 0.25rem;\n  }\n"])), function (props) { return (props.vertical ? "column" : "row"); }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.secondary; }, function (props) { return (props.vertical ? borderBottom : borderLeft); });
var ActionBar = function (_a) {
    var vertical = _a.vertical, children = _a.children, className = _a.className;
    return (React.createElement(Container, { className: className, vertical: vertical }, children));
};
exports.ActionBar = ActionBar;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map