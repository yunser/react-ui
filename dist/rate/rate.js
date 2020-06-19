"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rate = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
function StarIcon(props) {
    var size = props.size, color = props.color, onClick = props.onClick;
    return (react_1.default.createElement("div", { onClick: onClick, style: {
            cursor: 'pointer'
        } },
        react_1.default.createElement("svg", { style: {
                width: size,
                height: size
            }, focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
            react_1.default.createElement("path", { fill: color, d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }))));
}
var Row = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    /* height: 48px;\n    width: 300px; */\n    border: 1px solid #eee;\n"], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    /* height: 48px;\n    width: 300px; */\n    border: 1px solid #eee;\n"])));
var Root = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: relative;\n    height: 48px;\n    width: 300px;\n"], ["\n    position: relative;\n    height: 48px;\n    width: 300px;\n"])));
function Rate(props) {
    var value = props.value, onChange = props.onChange;
    var stars = [1, 2, 3, 4, 5];
    return (react_1.default.createElement(Root, null,
        react_1.default.createElement(Row, null,
            react_1.default.createElement(StarIcon, { size: 40, color: "#000" }),
            react_1.default.createElement(StarIcon, { size: 40, color: "#000" }),
            react_1.default.createElement(StarIcon, { size: 40, color: "#000" }),
            react_1.default.createElement(StarIcon, { size: 40, color: "#000" }),
            react_1.default.createElement(StarIcon, { size: 40, color: "#000" })),
        react_1.default.createElement(Row, null, stars.map(function (item, index) {
            return (react_1.default.createElement(StarIcon, { size: 40, onClick: function () {
                    onChange && onChange(index + 1);
                }, color: index < value ? '#ffb400' : '#000' }));
        }))));
}
exports.Rate = Rate;
var templateObject_1, templateObject_2;
//# sourceMappingURL=rate.js.map