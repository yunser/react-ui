"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var CheckboxWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    /* border: 1px solid #000; */\n    color: #fff;\n    /* background-color: ", "; */\n    /* box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); */\n    padding: 10px;\n    padding: 6px 16px;\n    min-width: 64px;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 4px;\n    \n    &:hover {\n        /* color: #31c27c; */\n        /* background-color: # */\n        opacity: .8;\n    }\n"], ["\n    display: inline-block;\n    /* border: 1px solid #000; */\n    color: #fff;\n    /* background-color: ", "; */\n    /* box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); */\n    padding: 10px;\n    padding: 6px 16px;\n    min-width: 64px;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 4px;\n    \n    &:hover {\n        /* color: #31c27c; */\n        /* background-color: # */\n        opacity: .8;\n    }\n"])), function (props) { return props.color === 'primary' ? props.theme.primary : '#999'; });
var CheckIcon = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 24px;\n    height: 24px;\n    border: 2px solid #000;\n    border-radius: 2px;\n"], ["\n    width: 24px;\n    height: 24px;\n    border: 2px solid #000;\n    border-radius: 2px;\n"])));
function Checkbox(props) {
    var _a = props.checked, checked = _a === void 0 ? false : _a, children = props.children, onChange = props.onChange;
    return (react_1.default.createElement(CheckboxWrap
    //  {...props}
    // style
    , { 
        //  {...props}
        // style
        onClick: function () {
            onChange && onChange(!checked);
        } },
        react_1.default.createElement("div", null,
            checked &&
                react_1.default.createElement("svg", { focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                    react_1.default.createElement("path", { fill: "#09c", d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })),
            !checked &&
                react_1.default.createElement(CheckIcon, null, children))));
}
exports.Checkbox = Checkbox;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map