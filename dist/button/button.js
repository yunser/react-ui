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
exports.Fab = exports.IconButton = exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var styles_1 = require("../styles");
var ButtonWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    /* border: 1px solid #000; */\n    color: ", ";\n    background-color: ", ";\n    box-shadow: ", ";\n    /* padding: 10px; */\n    padding: 6px 16px;\n    min-width: 64px;\n    cursor: ", ";\n    /* font-size: 16px; */\n    font-size: 14px;\n    line-height: 24px;\n    border-radius: 2px;\n    &:hover {\n        /* color: #31c27c; */\n        /* background-color: # */\n        opacity: ", ";\n    }\n    user-select: none;\n    /* display: flex;\n    align-items: center;\n    justify-content: center; */\n    min-height: 36px;\n"], ["\n    display: inline-block;\n    /* border: 1px solid #000; */\n    color: ", ";\n    background-color: ", ";\n    box-shadow: ", ";\n    /* padding: 10px; */\n    padding: 6px 16px;\n    min-width: 64px;\n    cursor: ", ";\n    /* font-size: 16px; */\n    font-size: 14px;\n    line-height: 24px;\n    border-radius: 2px;\n    &:hover {\n        /* color: #31c27c; */\n        /* background-color: # */\n        opacity: ", ";\n    }\n    user-select: none;\n    /* display: flex;\n    align-items: center;\n    justify-content: center; */\n    min-height: 36px;\n"
    // const IconButtonWrap = styled(Button)`
    //     width: 48px;
    //     height: 48px;
    // `
])), function (props) { return props.disabled ? 'rgba(0, 0, 0, 0.26)' : '#fff'; }, function (props) { return props.disabled ? 'rgba(0, 0, 0, 0.12)' : styles_1.propsColor(props); }, function (props) { return props.disabled ? 'none' : styles_1.propsShadowByKey(props, 'button'); }, function (props) { return props.disabled ? 'default' : 'pointer'; }, function (props) { return props.disabled ? 1 : 0.8; });
// const IconButtonWrap = styled(Button)`
//     width: 48px;
//     height: 48px;
// `
var IconButtonWrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n    /* border: 1px solid #000; */\n    /* color: #fff; */\n    /* padding: 10px; */\n    /* padding: 6px 16px; */\n    /* min-width: 64px; */\n    cursor: pointer;\n    /* font-size: 16px; */\n    /* font-size: ", "px; */\n    border-radius: 50%;\n    &:hover {\n        background: ", ";\n    }\n\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n    /* border: 1px solid #000; */\n    /* color: #fff; */\n    /* padding: 10px; */\n    /* padding: 6px 16px; */\n    /* min-width: 64px; */\n    cursor: pointer;\n    /* font-size: 16px; */\n    /* font-size: ",
    "px; */\n    border-radius: 50%;\n    &:hover {\n        background: ", ";\n    }\n\n"
    // export function Button(props: ButtonProps) {
    //     const { children, ref, forwardRef, ...restProps } = props
    //     return <ButtonWrap ref={forwardRef} {...restProps}>{children}</ButtonWrap>
    // }
])), function (props) {
    return 20;
}, function (props) { return props.theme.type === 'light' ? 'rgba(0, 0, 0, .12)' : 'rgba(255, 255, 255, .12)'; });
// export function Button(props: ButtonProps) {
//     const { children, ref, forwardRef, ...restProps } = props
//     return <ButtonWrap ref={forwardRef} {...restProps}>{children}</ButtonWrap>
// }
exports.Button = react_1.default.forwardRef(function (props, ref) {
    var children = props.children, restProps = __rest(props, ["children"]);
    return react_1.default.createElement(ButtonWrap, __assign({ ref: ref }, restProps), children);
    // return (
    //   <button ref={ref}>
    //     {props.children}
    //   </button>
    // )
});
// combineRef
function IconButton(props) {
    var children = props.children, href = props.href, target = props.target, onClick = props.onClick;
    return react_1.default.createElement(IconButtonWrap, __assign({}, props, { onClick: function () {
            // alert('click')
            if (href) {
                window.open(href, target);
                // if (target) {
                // } else {
                //     window.open(href) // TODO ?无法编译
                // }
            }
            onClick && onClick();
        } }), children);
}
exports.IconButton = IconButton;
var FabWrap = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 56px;\n    height: 56px;\n    /* border: 1px solid #000; */\n    /* color: #fff; */\n    /* padding: 10px; */\n    /* padding: 6px 16px; */\n    /* min-width: 64px; */\n    cursor: pointer;\n    color: #fff;\n    background-color: ", ";\n    /* font-size: 16px; */\n    /* font-size: ", "px; */\n    /* z-index: 1000000; */\n    border-radius: 50%;\n    z-index: ", ";\n    box-shadow: ", ";\n    &:hover {\n        background: rgba(255, 255, 255, .12);\n    }\n\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 56px;\n    height: 56px;\n    /* border: 1px solid #000; */\n    /* color: #fff; */\n    /* padding: 10px; */\n    /* padding: 6px 16px; */\n    /* min-width: 64px; */\n    cursor: pointer;\n    color: #fff;\n    background-color: ", ";\n    /* font-size: 16px; */\n    /* font-size: ",
    "px; */\n    /* z-index: 1000000; */\n    border-radius: 50%;\n    z-index: ", ";\n    box-shadow: ", ";\n    &:hover {\n        background: rgba(255, 255, 255, .12);\n    }\n\n"])), function (props) { return styles_1.propsColor(props); }, function (props) {
    return 20;
}, function (props) { return styles_1.propsZIndexByKey(props, 'fab'); }, function (props) { return styles_1.propsShadowByKey(props, 'fab'); });
function Fab(props) {
    var children = props.children, href = props.href, target = props.target;
    return (react_1.default.createElement(FabWrap, __assign({}, props, { onClick: function () {
            // alert('click')
            if (href) {
                window.open(href, target);
                // if (target) {
                // } else {
                //     window.open(href) // TODO ?无法编译
                // }
            }
        } }), children));
}
exports.Fab = Fab;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=button.js.map