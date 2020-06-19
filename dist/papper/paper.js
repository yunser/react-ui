"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paper = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var defaultLevel = 1;
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";\n"], ["\n    box-shadow: ",
    ";\n"])), function (props) {
    console.log('阴影', props.level, props.theme.shadows[props.level || defaultLevel]);
    return props.theme.shadows[props.level || defaultLevel];
});
function Paper(props) {
    var children = props.children, style = props.style;
    return (react_1.default.createElement(Root, __assign({}, props, { style: style }), children));
}
exports.Paper = Paper;
var templateObject_1;
//# sourceMappingURL=paper.js.map