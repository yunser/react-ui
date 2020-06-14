"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var react_1 = __importDefault(require("react"));
// import styled from 'styled-components'
// import { Theme } from '../styles'
var react_router_dom_1 = require("react-router-dom");
// const AWrap = styled.a<LinkProps>`
//     display: inline-block;
//     color: ${props => {
//         const theme: Theme = props.theme
//         const defaultColor = '#f00'
//         const themeType = props.theme.type === 'light' ? 'light' : 'dark'
//         if (theme) {
//             return theme.palatte.secondary[themeType] || defaultColor
//         }
//         return defaultColor
//     }};
//     cursor: pointer;
//     /* font-size: 16px; */
//     font-size: ${props => {
//         return 20
//     }}px;
//     border-radius: 4px;
//     &:hover {
//         /* color: #31c27c; */
//         /* background-color: # */
//         opacity: .8;
//     }
// `
function Link(props) {
    var to = props.to, href = props.href, target = props.target, children = props.children, restProps = __rest(props, ["to", "href", "target", "children"]);
    if (to) {
        return react_1.default.createElement(react_router_dom_1.Link, { to: to, target: target }, children);
    }
    return react_1.default.createElement("a", __assign({ href: href, target: target }, restProps), children);
}
exports.Link = Link;
//# sourceMappingURL=index.js.map