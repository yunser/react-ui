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
exports.ToolBar = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ToolBarWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 64px;\n    display: flex;\n    align-items: center;\n    /* color: #fff; */\n    /* background-color: ", ";\n    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n    padding: 6px 16px;\n    cursor: pointer;\n    font-size: 16px; */\n"], ["\n    height: 64px;\n    display: flex;\n    align-items: center;\n    /* color: #fff; */\n    /* background-color: ", ";\n    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n    padding: 6px 16px;\n    cursor: pointer;\n    font-size: 16px; */\n"])), function (props) { return props.theme.palatte.primary.light; });
function ToolBar(props) {
    var className = props.className, children = props.children;
    return react_1.default.createElement(ToolBarWrap, __assign({ className: className }, props), children);
}
exports.ToolBar = ToolBar;
var templateObject_1;
//# sourceMappingURL=index.js.map