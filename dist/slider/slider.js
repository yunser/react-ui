"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 28px;\n    border: 1px solid #000;\n"], ["\n    height: 28px;\n    border: 1px solid #000;\n"])));
var Bg = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: 2px;\n    background: #eee;\n    /* width: 300px; */\n"], ["\n    height: 2px;\n    background: #eee;\n    /* width: 300px; */\n"])));
var Line = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    height: 2px;\n    background: #651fff;\n    /* width: 300px; */\n"], ["\n    height: 2px;\n    background: #651fff;\n    /* width: 300px; */\n"])));
var Dot = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    position: absolute;\n    left: 20px;\n    top: 10px;\n    width: 12px;\n    height: 12px;\n    background: #651fff;\n    border-radius: 50%;\n"], ["\n    position: absolute;\n    left: 20px;\n    top: 10px;\n    width: 12px;\n    height: 12px;\n    background: #651fff;\n    border-radius: 50%;\n"])));
function Slider(props) {
    var value = props.value;
    return (react_1.default.createElement(Root, null,
        react_1.default.createElement(Bg, null,
            react_1.default.createElement(Line, { style: { width: 30 } }),
            react_1.default.createElement(Dot, null),
            value)));
}
exports.Slider = Slider;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=slider.js.map