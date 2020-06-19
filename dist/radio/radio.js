"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 42px;\n    height: 42px;\n    /* border: 1px solid #000; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n"], ["\n    width: 42px;\n    height: 42px;\n    /* border: 1px solid #000; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n"])));
var Out = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 24px;\n    height: 24px;\n    border: 2px solid #000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n"], ["\n    width: 24px;\n    height: 24px;\n    border: 2px solid #000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n"])));
var In = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 10px;\n    height: 10px;\n    background: #000;\n    /* border: 2px solid #000; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n"], ["\n    width: 10px;\n    height: 10px;\n    background: #000;\n    /* border: 2px solid #000; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n"])));
function Radio(props) {
    var value = props.value, _a = props.checked, checked = _a === void 0 ? false : _a, onChange = props.onChange;
    console.log('value', value);
    return (react_1.default.createElement(Root, { onClick: function () {
            onChange && onChange(!checked);
        } },
        react_1.default.createElement(Out, null, checked &&
            react_1.default.createElement(In, null))));
}
exports.Radio = Radio;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=radio.js.map