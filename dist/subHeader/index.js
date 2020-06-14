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
exports.SubHeader = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var SubHeaderWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: rgba(0, 0, 0, .54);\n    height: 48px;\n    font-size: 14px;\n    padding-left: 16px;\n    display: flex;\n    align-items: center;\n"], ["\n    color: rgba(0, 0, 0, .54);\n    height: 48px;\n    font-size: 14px;\n    padding-left: 16px;\n    display: flex;\n    align-items: center;\n"])));
function SubHeader(props) {
    var children = props.children;
    return react_1.default.createElement(SubHeaderWrap, __assign({}, props), children);
}
exports.SubHeader = SubHeader;
var templateObject_1;
//# sourceMappingURL=index.js.map