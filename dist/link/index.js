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
var styled_components_1 = __importDefault(require("styled-components"));
var AWrap = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    color: #09c;\n    cursor: pointer;\n    /* font-size: 16px; */\n    &:hover {\n        /* color: #31c27c; */\n        /* background-color: # */\n        opacity: .8;\n    }\n"], ["\n    display: inline-block;\n    color: #09c;\n    cursor: pointer;\n    /* font-size: 16px; */\n    &:hover {\n        /* color: #31c27c; */\n        /* background-color: # */\n        opacity: .8;\n    }\n"])));
function Link(props) {
    var href = props.href, target = props.target, children = props.children, className = props.className, restProps = __rest(props, ["href", "target", "children", "className"]);
    return react_1.default.createElement(AWrap, __assign({ className: className, href: href, target: target }, restProps), children);
}
exports.Link = Link;
var templateObject_1;
//# sourceMappingURL=index.js.map