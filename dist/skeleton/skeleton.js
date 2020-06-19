"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    min-height: 2px;\n    background: #eee;\n    border-radius: 2px;\n    @keyframes keyframes-pulse {\n        0% {\n            opacity: 1;\n        }\n        50% {\n            opacity: 0.4;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n"], ["\n    min-height: 2px;\n    background: #eee;\n    border-radius: 2px;\n    @keyframes keyframes-pulse {\n        0% {\n            opacity: 1;\n        }\n        50% {\n            opacity: 0.4;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n"])));
function Skeleton(props) {
    var _a = props.width, width = _a === void 0 ? '100%' : _a, _b = props.height, height = _b === void 0 ? 2 : _b, _c = props.shape, shape = _c === void 0 ? 'rect' : _c, _d = props.animation, animation = _d === void 0 ? false : _d;
    return (react_1.default.createElement(Root, { style: {
            width: width,
            height: height,
            borderRadius: shape === 'circle' ? '50%' : 0,
            animation: animation ? 'keyframes-pulse 1.5s ease-in-out 0.5s infinite' : 'none'
        } }));
}
exports.Skeleton = Skeleton;
var templateObject_1;
//# sourceMappingURL=skeleton.js.map