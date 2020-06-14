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
exports.TextArea = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var color_1 = __importDefault(require("color"));
var textarea_autosize_1 = require("./textarea-autosize");
var utility_1 = require("./utility");
var TextAreaWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Field = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  position: relative;\n\n  opacity: ", ";\n\n  cursor: ", ";\n\n  label {\n    position: absolute;\n    top: 1rem;\n    left: 0;\n    opacity: 0;\n    transition: all 0.1s ease;\n  }\n\n  textarea:not(:placeholder-shown) + label {\n    transform: translateY(-1rem);\n    opacity: 1;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  position: relative;\n\n  opacity: ",
    ";\n\n  cursor: ",
    ";\n\n  label {\n    position: absolute;\n    top: 1rem;\n    left: 0;\n    opacity: 0;\n    transition: all 0.1s ease;\n  }\n\n  textarea:not(:placeholder-shown) + label {\n    transform: translateY(-1rem);\n    opacity: 1;\n  }\n"])), function (props) {
    return props.state === "disabled" || props.state === "loading" ? 0.75 : 1;
}, function (props) {
    return (props.state === "disabled" || props.state === "loading") && "not-allowed";
});
var LabelStyled = styled_components_1.default.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: ", ";\n  font-size: 0.5rem;\n"], ["\n  color: ", ";\n  font-weight: ", ";\n  font-size: 0.5rem;\n"])), function (props) { return utility_1.colorFromState(props); }, function (props) { return props.theme.font.fontWeightBold; });
var TextAreaStyled = styled_components_1.default(textarea_autosize_1.TextAreaAutosize)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: transparent;\n  width: 100%;\n  font-size: inherit;\n  font-weight: inherit;\n  font: inherit;\n\n  padding: 0.75rem 0rem 0.5rem 0.5rem;\n  border: none;\n  border-bottom: solid 1px\n    ", ";\n\n  box-sizing: border-box;\n\n  pointer-events: ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    border-bottom: solid 1px ", ";\n    outline: 0;\n    box-shadow: 0 2px 6px -8px ", ";\n  }\n\n  &:focus::placeholder {\n    color: ", ";\n\n    opacity: 0.5;\n  }\n"], ["\n  background-color: transparent;\n  width: 100%;\n  font-size: inherit;\n  font-weight: inherit;\n  font: inherit;\n\n  padding: 0.75rem 0rem 0.5rem 0.5rem;\n  border: none;\n  border-bottom: solid 1px\n    ",
    ";\n\n  box-sizing: border-box;\n\n  pointer-events: ",
    ";\n\n  &::placeholder {\n    color: ",
    ";\n  }\n\n  &:focus {\n    border-bottom: solid 1px ", ";\n    outline: 0;\n    box-shadow: 0 2px 6px -8px ", ";\n  }\n\n  &:focus::placeholder {\n    color: ",
    ";\n\n    opacity: 0.5;\n  }\n"])), function (props) {
    return color_1.default(utility_1.colorFromState(props))
        .mix(color_1.default("white"), 0.7)
        .toString();
}, function (props) {
    return (props.state === "disabled" || props.state === "loading") && "none";
}, function (props) {
    return color_1.default(utility_1.colorFromState(props))
        .mix(color_1.default("white"), 0.1)
        .toString();
}, function (props) { return utility_1.colorFromState(props); }, function (props) { return utility_1.colorFromState(props); }, function (props) {
    return color_1.default(utility_1.colorFromState(props))
        .mix(color_1.default("white"), 0.1)
        .toString();
});
var Message = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  width: 100%;\n  font-size: 0.75rem;\n  padding: 0.5rem;\n"], ["\n  color: ", ";\n  width: 100%;\n  font-size: 0.75rem;\n  padding: 0.5rem;\n"])), function (props) { return utility_1.colorFromState(props); });
var TextAreaComponent = function (_a) {
    var className = _a.className, label = _a.label, color = _a.color, state = _a.state, validationState = _a.validationState, message = _a.message, textAreaProps = _a.textAreaProps, labelProps = _a.labelProps;
    return (react_1.default.createElement(TextAreaWrapper, { className: className },
        react_1.default.createElement(Field, { state: state },
            react_1.default.createElement(TextAreaStyled, __assign({ validationState: validationState, color: color, state: state, placeholder: label }, textAreaProps)),
            label && (react_1.default.createElement(LabelStyled, __assign({ state: state, validationState: validationState, color: color }, labelProps), label))),
        message && (react_1.default.createElement(Message, { state: state, validationState: validationState }, message))));
};
TextAreaComponent.defaultProps = {
    state: "normal",
    validationState: "none"
};
var TextArea = TextAreaComponent;
exports.TextArea = TextArea;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map