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
exports.Image = void 0;
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ImageResponsive = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 100%;\n  border-radius: ", ";\n  object-fit: cover;\n"], ["\n  max-width: 100%;\n  border-radius: ", ";\n  object-fit: cover;\n"])), function (props) { return props.theme.borderRadius; });
var SvgStyled = styled_components_1.default.svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 100%;\n  border-radius: ", ";\n  object-fit: cover;\n"], ["\n  max-width: 100%;\n  border-radius: ", ";\n  object-fit: cover;\n"])), function (props) { return props.theme.borderRadius; });
var NoImage = (React.createElement(SvgStyled, { xmlns: "http://www.w3.org/2000/svg", height: "128", viewBox: "0 0 512 512", width: "128", fill: "#bfbfbf" },
    React.createElement("path", { d: "M368 224c26.5 0 48-21.5 48-48 0-26.5-21.5-48-48-48 -26.5 0-48 21.5-48 48C320 202.5 341.5 224 368 224z" }),
    React.createElement("path", { d: "M452 64H60c-15.6 0-28 12.7-28 28.3v327.4c0 15.6 12.4 28.3 28 28.3h392c15.6 0 28-12.7 28-28.3V92.3C480 76.7 467.6 64 452 64zM348.9 261.7c-3-3.5-7.6-6.2-12.8-6.2 -5.1 0-8.7 2.4-12.8 5.7l-18.7 15.8c-3.9 2.8-7 4.7-11.5 4.7 -4.3 0-8.2-1.6-11-4.1 -1-0.9-2.8-2.6-4.3-4.1L224 215.3c-4-4.6-10-7.5-16.7-7.5 -6.7 0-12.9 3.3-16.8 7.8L64 368.2V107.7c1-6.8 6.3-11.7 13.1-11.7h357.7c6.9 0 12.5 5.1 12.9 12l0.3 260.4L348.9 261.7z" })));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, className = _a.className;
    return src ? React.createElement(ImageResponsive, { className: className, alt: alt, src: src }) : NoImage;
};
exports.Image = Image;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map