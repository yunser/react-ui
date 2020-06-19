"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Root = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
function Image(props) {
    var src = props.src;
    return (react_1.default.createElement(Root, { src: src }));
}
exports.Image = Image;
var templateObject_1;
//# sourceMappingURL=image.js.map