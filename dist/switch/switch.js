"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Dot = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 20px;\n    height: 20px;\n    background-color: #651fff;\n    border-radius: 50%;\n"], ["\n    width: 20px;\n    height: 20px;\n    background-color: #651fff;\n    border-radius: 50%;\n"])));
var Bar = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    /* color: #651fff; */\n    width: 36px;\n    height: 12px;\n    background-color: #f00;\n    border-radius: 8px;\n"], ["\n    /* color: #651fff; */\n    width: 36px;\n    height: 12px;\n    background-color: #f00;\n    border-radius: 8px;\n"])));
var DotBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: absolute;\n    left: 0;\n    top: 14px;\n    width: 40px;\n    height: 40px;\n    /* border: 1px solid #000; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    cursor: pointer;\n    &:hover {\n        background-color: rgba(0, 0, 0, .1);\n    }\n"], ["\n    position: absolute;\n    left: 0;\n    top: 14px;\n    width: 40px;\n    height: 40px;\n    /* border: 1px solid #000; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    cursor: pointer;\n    &:hover {\n        background-color: rgba(0, 0, 0, .1);\n    }\n"])));
function Switch() {
    return (react_1.default.createElement("div", null,
        "123",
        react_1.default.createElement(Bar, null,
            react_1.default.createElement(DotBox, null,
                react_1.default.createElement(Dot, null)))));
}
exports.Switch = Switch;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=switch.js.map