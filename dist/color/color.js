"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPicker = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var input_1 = require("../input");
var Color = require('color');
var Panel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    width: 200px;\n    height: 200px;\n    background: #000;\n    border: 1px solid #000;\n"], ["\n    position: relative;\n    width: 200px;\n    height: 200px;\n    background: #000;\n    border: 1px solid #000;\n"])));
var Box1 = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n"], ["\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n"])));
var Box2 = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));\n"], ["\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));\n"])));
var HueRoot = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    position: relative;\n    width: 160px;\n    height: 12px;\n"], ["\n    position: relative;\n    width: 160px;\n    height: 12px;\n"])));
var HueBg = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    background: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);\n"], ["\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    background: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);\n"])));
function HueSlider() {
    return (react_1.default.createElement(HueRoot, null,
        react_1.default.createElement(HueBg, null)));
}
var HexInput = styled_components_1.default(input_1.Input)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    width: 160px;\n"], ["\n    width: 160px;\n"])));
var OpacityInput = styled_components_1.default(input_1.NumberInput)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    width: 80px;\n"], ["\n    width: 80px;\n"])));
var Dot = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border: 1px solid #000;\n    background: #000;\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center;\n"], ["\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border: 1px solid #000;\n    background: #000;\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center;\n"])));
function ColorPicker(props) {
    var value = props.value, onChange = props.onChange;
    var _a = value || {
        hex: '#000000',
        opacity: 100
    }, hex = _a.hex, opacity = _a.opacity;
    var color;
    try {
        color = Color(hex);
    }
    catch (err) {
        console.log('e', err);
        color = Color('#000000');
    }
    var rgbArr = color.rgb().array();
    console.log('color', color);
    console.log('color hsv', color.hsv());
    // console.log('rgb', rgb)
    var hexNoSymbol = hex.replace('#', '');
    var rgba = "rgba(" + rgbArr[0] + ", " + rgbArr[1] + ", " + rgbArr[2] + ", " + opacity / 100 + ")";
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Dot, { style: { backgroundColor: rgba } }),
        "#",
        react_1.default.createElement(HexInput, { value: hexNoSymbol, onChange: function (value) {
                onChange && onChange({
                    hex: '#' + value,
                    opacity: opacity,
                });
            } }),
        react_1.default.createElement(OpacityInput, { value: opacity, onChange: function (value) {
                onChange && onChange({
                    hex: hex,
                    opacity: value || 100,
                });
            } }),
        react_1.default.createElement("div", null,
            "Hex: ",
            hex),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                "R: ",
                rgbArr[0],
                "G: ",
                rgbArr[1],
                "B: ",
                rgbArr[2])),
        "-- HSV 208\u300186\u300124",
        react_1.default.createElement(HueSlider, null),
        react_1.default.createElement(Panel, { style: {
                background: hex,
            } },
            react_1.default.createElement(Box1, null),
            react_1.default.createElement(Box2, null))));
}
exports.ColorPicker = ColorPicker;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=color.js.map