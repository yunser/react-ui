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
exports.AppBar = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var styles_1 = require("../styles");
var styles_2 = require("../styles");
var AppBarWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    /* background-color: ", "; */\n    background-color: ", ";\n    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n    padding: 0 8px;\n    height: 64px;\n"], ["\n    color: ", ";\n    /* background-color: ", "; */\n    background-color: ",
    ";\n    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n    padding: 0 8px;\n    height: 64px;\n"])), function (props) { return props.theme.palatte.type === 'light' ? '#555' : '#fff'; }, function (props) { return styles_1.propsColor(props); }, function (props) {
    var color = props.color || { light: '#fff', dark: '#333' };
    return styles_2.themeColor(props.theme, color);
});
var TitleWrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 24px;\n    /* color: #fff; */\n    padding: 0 8px;\n"], ["\n    font-size: 24px;\n    /* color: #fff; */\n    padding: 0 8px;\n"])));
function Title(props) {
    var children = props.children;
    return react_1.default.createElement(TitleWrap, null, children);
}
function AppBar(props) {
    var className = props.className, children = props.children, style = props.style;
    return react_1.default.createElement(AppBarWrap, __assign({ className: className }, props, { style: style }), children);
}
exports.AppBar = AppBar;
AppBar.Title = Title;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map