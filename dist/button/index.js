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
exports.Fab = exports.IconButton = exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var styles_1 = require("../styles");
var ButtonWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    /* border: 1px solid #000; */\n    color: #fff;\n    background-color: ", ";\n    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n    padding: 10px;\n    padding: 6px 16px;\n    min-width: 64px;\n    cursor: pointer;\n    /* font-size: 16px; */\n    font-size: 14px;\n    border-radius: 2px;\n    &:hover {\n        /* color: #31c27c; */\n        /* background-color: # */\n        opacity: .8;\n    }\n    user-select: none;\n"], ["\n    display: inline-block;\n    /* border: 1px solid #000; */\n    color: #fff;\n    background-color: ", ";\n    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n    padding: 10px;\n    padding: 6px 16px;\n    min-width: 64px;\n    cursor: pointer;\n    /* font-size: 16px; */\n    font-size: 14px;\n    border-radius: 2px;\n    &:hover {\n        /* color: #31c27c; */\n        /* background-color: # */\n        opacity: .8;\n    }\n    user-select: none;\n"
    // const IconButtonWrap = styled(Button)`
    //     width: 48px;
    //     height: 48px;
    // `
])), function (props) { return styles_1.propsColor(props); });
// const IconButtonWrap = styled(Button)`
//     width: 48px;
//     height: 48px;
// `
var IconButtonWrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n    /* border: 1px solid #000; */\n    /* color: #fff; */\n    /* padding: 10px; */\n    /* padding: 6px 16px; */\n    /* min-width: 64px; */\n    cursor: pointer;\n    /* font-size: 16px; */\n    /* font-size: ", "px; */\n    border-radius: 50%;\n    &:hover {\n        background: ", ";\n    }\n\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n    /* border: 1px solid #000; */\n    /* color: #fff; */\n    /* padding: 10px; */\n    /* padding: 6px 16px; */\n    /* min-width: 64px; */\n    cursor: pointer;\n    /* font-size: 16px; */\n    /* font-size: ",
    "px; */\n    border-radius: 50%;\n    &:hover {\n        background: ", ";\n    }\n\n"])), function (props) {
    return 20;
}, function (props) { return props.theme.type === 'light' ? 'rgba(0, 0, 0, .12)' : 'rgba(255, 255, 255, .12)'; });
function Button(props) {
    var children = props.children;
    return react_1.default.createElement(ButtonWrap, __assign({}, props), children);
}
exports.Button = Button;
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
var FabWrap = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 56px;\n    height: 56px;\n    /* border: 1px solid #000; */\n    /* color: #fff; */\n    /* padding: 10px; */\n    /* padding: 6px 16px; */\n    /* min-width: 64px; */\n    cursor: pointer;\n    color: #fff;\n    background-color: ", ";\n    /* font-size: 16px; */\n    /* font-size: ", "px; */\n    border-radius: 50%;\n    &:hover {\n        background: rgba(255, 255, 255, .12);\n    }\n\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 56px;\n    height: 56px;\n    /* border: 1px solid #000; */\n    /* color: #fff; */\n    /* padding: 10px; */\n    /* padding: 6px 16px; */\n    /* min-width: 64px; */\n    cursor: pointer;\n    color: #fff;\n    background-color: ", ";\n    /* font-size: 16px; */\n    /* font-size: ",
    "px; */\n    border-radius: 50%;\n    &:hover {\n        background: rgba(255, 255, 255, .12);\n    }\n\n"])), function (props) { return styles_1.propsColor(props); }, function (props) {
    return 20;
});
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
//# sourceMappingURL=index.js.map