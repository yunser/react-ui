"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = exports.Dialog = exports.Title = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var button_1 = require("../button");
var styles_1 = require("../styles");
var DialogWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    \n"], ["\n    \n"])));
var maskStyle = "\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    opacity: 1;\n";
var Mask = styled_components_1.default.mask(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: fixed;\n    ", "\n    z-index: 999999999;\n"], ["\n    position: fixed;\n    ", "\n    z-index: 999999999;\n"])), maskStyle);
var Body = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    /* background-color: #fff; */\n    padding: 24px 40px;\n    display: flex;\n    z-index: ", ";\n    align-items: center;\n    justify-content: center;\n"], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    /* background-color: #fff; */\n    padding: 24px 40px;\n    display: flex;\n    z-index: ", ";\n    align-items: center;\n    justify-content: center;\n"])), 999999999 + 1);
var Center = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    /* position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; */\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: ", ";\n    /* padding: 16px; */\n"], ["\n    /* position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; */\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: ", ";\n    /* padding: 16px; */\n"])), function (props) { return styles_1.propsShadowByKey(props, 'button'); });
var TitleWrap = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    flex: 0 0 auto;\n    margin: 0;\n    padding: 24px 24px 20px 24px;\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 1.6;\n    letter-spacing: 0.0075em;\n"], ["\n    flex: 0 0 auto;\n    margin: 0;\n    padding: 24px 24px 20px 24px;\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 1.6;\n    letter-spacing: 0.0075em;\n"])));
function Title(props) {
    var children = props.children;
    return (react_1.default.createElement(TitleWrap, null, children));
}
exports.Title = Title;
function Dialog(props) {
    var children = props.children, _a = props.visible, visible = _a === void 0 ? true : _a, onClose = props.onClose;
    return (react_1.default.createElement(DialogWrap, null,
        visible &&
            react_1.default.createElement(Mask, { onClick: function () {
                    onClose && onClose();
                } }),
        visible &&
            react_1.default.createElement(Body, null,
                react_1.default.createElement(Center, null, children))));
}
exports.Dialog = Dialog;
var ActionsWrap = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    display: flex;\n    padding: 16px;\n    justify-content: flex-end;\n"], ["\n    display: flex;\n    padding: 16px;\n    justify-content: flex-end;\n"])));
var ActionItemWrap = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    margin-left: 16px;\n"], ["\n    margin-left: 16px;\n"])));
function Actions(props) {
    var _a = props.children, children = _a === void 0 ? [] : _a;
    function ActionItem(item, index) {
        return (react_1.default.createElement(ActionItemWrap, { key: index }, item));
    }
    return (react_1.default.createElement(ActionsWrap, null, !!children &&
        children.map(ActionItem)));
}
exports.Actions = Actions;
var DialogContent = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    padding: 24px;\n    /* display: flex;\n    padding: 16px; */\n"], ["\n    padding: 24px;\n    /* display: flex;\n    padding: 16px; */\n"
    // function Context() {
    // }
])));
// function Context() {
// }
Dialog.Title = Title;
Dialog.Actions = Actions;
Dialog.Content = DialogContent;
Dialog.Button = button_1.Button;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=dialog.js.map