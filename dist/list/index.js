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
exports.List = exports.Item = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
// import { Theme, defaultTheme } from '../styles'
var icon_1 = require("../icon");
var link_1 = require("../link");
var styles_1 = require("../styles");
var ListWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: ", ";\n    /* background-color: #fff; */\n    padding: 8px 0;\n"], ["\n    background: ", ";\n    /* background-color: #fff; */\n    padding: 8px 0;\n"])), function (props) { return styles_1.themeColor(props.theme, { light: '#fff', dark: '#424242' }); });
var hoverColor = 'rgba(0, 0, 0, .1)';
var white = '#fff';
var ItemWrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    height: 48px;\n    /* border: 1px solid #000; */\n    color: ", ";\n    &:hover {\n        /* color: #31c27c; */\n        background-color: ", ";\n        opacity: .8;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    height: 48px;\n    /* border: 1px solid #000; */\n    color: ", ";\n    &:hover {\n        /* color: #31c27c; */\n        background-color: ", ";\n        opacity: .8;\n    }\n"])), function (props) { return styles_1.themeColor(props.theme, { light: '#rgba(0,0,0,.87)', dark: '#rgba(255,255,255,.87)' }); }, function (props) { return (props.href || props.to) ? hoverColor : white; });
function Item(props) {
    var href = props.href, target = props.target, to = props.to, children = props.children;
    if (to || href) {
        return (react_1.default.createElement(link_1.Link, { to: to, href: href, target: target },
            react_1.default.createElement(ItemWrap, __assign({ onClick: function () {
                } }, props), children)));
    }
    // if (href) {
    //     return (
    //         <Link to={to} href={href}>
    //             <ItemWrap onClick={() => {
    //             }} {...props}>
    //                 {children}
    //             </ItemWrap>
    //         </Link>
    //     )
    // }
    return (react_1.default.createElement(ItemWrap, __assign({ onClick: function () {
        } }, props), children));
}
exports.Item = Item;
function List(props) {
    var children = props.children;
    return react_1.default.createElement(ListWrap, __assign({}, props), children);
}
exports.List = List;
var Title = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 16px;\n    /* color: rgba(0,0,0,.87); */\n"], ["\n    font-size: 16px;\n    /* color: rgba(0,0,0,.87); */\n"])));
var styledIcon = styled_components_1.default(icon_1.Icon)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    /* display: block; */\n    width: 48px;\n    height: 48px;\n    /* border: 1px solid #000; */\n    margin-right: 8px;\n    color: #757575;\n    display: flex !important;\n    align-items: center;\n    justify-content: center;\n    font-size: 24px;\n"], ["\n    /* display: block; */\n    width: 48px;\n    height: 48px;\n    /* border: 1px solid #000; */\n    margin-right: 8px;\n    color: #757575;\n    display: flex !important;\n    align-items: center;\n    justify-content: center;\n    font-size: 24px;\n"])));
List.Item = Item;
List.Title = Title;
List.Icon = styledIcon;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=index.js.map