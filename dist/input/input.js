"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = exports.NumberInput = exports.Input = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n"], ["\n    display: inline-block;\n"])));
var MyInput = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: inline-block;\n    width: 100%;\n    outline: none;\n    height: 32px;\n    line-height: 32px;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n"], ["\n    display: inline-block;\n    width: 100%;\n    outline: none;\n    height: 32px;\n    line-height: 32px;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n"])));
function Input(props) {
    var className = props.className, defaultValue = props.defaultValue, placeholder = props.placeholder, _a = props.type, type = _a === void 0 ? 'text' : _a, value = props.value, onChange = props.onChange;
    var _b = react_1.useState(false), isFocus = _b[0], setIsFocus = _b[1];
    function handlerChange(e) {
        onChange && onChange(e.target.value);
    }
    function handlerFocus() {
        setIsFocus(true);
    }
    function handlerBlur() {
        setIsFocus(false);
    }
    return (react_1.default.createElement(Root, null,
        react_1.default.createElement(MyInput, { className: className, type: type, placeholder: placeholder, onFocus: handlerFocus, onBlur: handlerBlur, defaultValue: defaultValue, value: value, onChange: handlerChange, style: {
                borderBottom: isFocus ? '1px solid #4285f4' : '1px solid rgba(0, 0, 0, .4)',
            } })));
}
exports.Input = Input;
function NumberInput(props) {
    var className = props.className, defaultValue = props.defaultValue, placeholder = props.placeholder, value = props.value, onChange = props.onChange;
    var _a = react_1.useState(false), isFocus = _a[0], setIsFocus = _a[1];
    function handlerChange(e) {
        onChange && onChange(e.target.value ? parseFloat(e.target.value) : undefined);
    }
    function handlerFocus() {
        setIsFocus(true);
    }
    function handlerBlur() {
        setIsFocus(false);
    }
    return (react_1.default.createElement(Root, null,
        react_1.default.createElement(MyInput, { className: className, type: "number", placeholder: placeholder, onFocus: handlerFocus, onBlur: handlerBlur, defaultValue: defaultValue, value: value, onChange: handlerChange, style: {
                borderBottom: isFocus ? '1px solid #4285f4' : '1px solid rgba(0, 0, 0, .4)',
            } })));
}
exports.NumberInput = NumberInput;
exports.TextInput = Input;
var templateObject_1, templateObject_2;
//# sourceMappingURL=input.js.map