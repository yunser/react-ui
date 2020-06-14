"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = void 0;
var styled_components_1 = require("styled-components");
// These are global styles. Include at the top!
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html {\n    box-sizing: border-box;\n    font-size: ", ";\n  }\n\n  #__next {\n    min-height: 100vh;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    background-color: ", ";\n    color: black;\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .react-css-collapse-transition {\n    transition: height 300ms cubic-bezier(.54, 0, .29, 1);\n  }\n"], ["\n  html {\n    box-sizing: border-box;\n    font-size: ", ";\n  }\n\n  #__next {\n    min-height: 100vh;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    background-color: ", ";\n    color: black;\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .react-css-collapse-transition {\n    transition: height 300ms cubic-bezier(.54, 0, .29, 1);\n  }\n"])), function (props) { return props.theme.font.baseFontSize; }, function (props) { return props.theme.colors.background; }, function (props) { return props.theme.font.baseFontFamily; }, function (props) { return props.theme.font.fontWeightRegular; }, function (props) { return props.theme.font.lineHeight; });
var templateObject_1;
//# sourceMappingURL=global-style.js.map