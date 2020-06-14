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
exports.Skeleton = void 0;
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var SkeletonContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  min-width: 1rem;\n  padding: 0.5rem 0 0.5rem 0rem;\n  padding-right: ", "rem;\n  height: 100%;\n  min-height: 1rem;\n"], ["\n  width: 100%;\n  min-width: 1rem;\n  padding: 0.5rem 0 0.5rem 0rem;\n  padding-right: ", "rem;\n  height: 100%;\n  min-height: 1rem;\n"])), function (props) { return props.paddingRight; });
var DivStyled = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  min-width: 1rem;\n  height: 100%;\n  min-height: 1rem;\n  border-radius: ", ";\n\n  background-image: linear-gradient(\n    90deg,\n    #f4f4f4 0px,\n    rgba(229, 229, 229, 0.8) 80px,\n    #f4f4f4 80px\n  );\n\n  animation: shine 1.5s infinite ease-out;\n\n  background-size: 2000px;\n\n  @keyframes shine {\n    0% {\n      background-position: 0px;\n    }\n\n    40%,\n    100% {\n      background-position: 900px;\n    }\n  }\n"], ["\n  width: 100%;\n  min-width: 1rem;\n  height: 100%;\n  min-height: 1rem;\n  border-radius: ", ";\n\n  background-image: linear-gradient(\n    90deg,\n    #f4f4f4 0px,\n    rgba(229, 229, 229, 0.8) 80px,\n    #f4f4f4 80px\n  );\n\n  animation: shine 1.5s infinite ease-out;\n\n  background-size: 2000px;\n\n  @keyframes shine {\n    0% {\n      background-position: 0px;\n    }\n\n    40%,\n    100% {\n      background-position: 900px;\n    }\n  }\n"])), function (props) { return props.theme.borderRadius; });
var Skeleton = function (_a) {
    var _b = _a.lines, lines = _b === void 0 ? 1 : _b;
    var skeletons = Array.from({ length: lines }, function (v, i) {
        var paddingRight = i == 0 ? 0 : Math.random() * 10;
        return (React.createElement(SkeletonContainer, { paddingRight: paddingRight, key: i },
            React.createElement(DivStyled, null)));
    });
    return React.createElement(React.Fragment, null, skeletons);
};
exports.Skeleton = Skeleton;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map