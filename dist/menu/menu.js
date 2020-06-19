"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var MenuItemWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 6px 16px;\n    cursor: pointer;\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.04);\n    }\n"], ["\n    padding: 6px 16px;\n    cursor: pointer;\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.04);\n    }\n"])));
function MenuItem(props) {
    var children = props.children;
    return (react_1.default.createElement(MenuItemWrap, null, children));
}
var MenuWrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding: 8px 0;\n    min-width: 112px;\n    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);\n"], ["\n    padding: 8px 0;\n    min-width: 112px;\n    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);\n"])));
var Mask = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n     \n"], ["\n     \n"])));
function Menu(props) {
    var children = props.children;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(MenuWrap, null, children),
        react_1.default.createElement(Mask, null)));
}
exports.Menu = Menu;
Menu.Item = MenuItem;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=menu.js.map