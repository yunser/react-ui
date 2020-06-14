"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emphasisColor = exports.contentColor = exports.darkerActiveColor = exports.activeColor = exports.hoverColor = exports.buttonBottomColor = void 0;
var color_1 = __importDefault(require("color"));
exports.buttonBottomColor = function (color) {
    return color_1.default(color)
        .darken(0.1)
        .desaturate(0.4)
        .toString();
};
exports.hoverColor = function (color) {
    return color_1.default(color)
        .lighten(0.05)
        .toString();
};
exports.activeColor = function (color) {
    return color_1.default(color)
        .darken(0.05)
        .toString();
};
exports.darkerActiveColor = function (color) {
    return color_1.default(color)
        .darken(0.2)
        .toString();
};
exports.contentColor = function (props) {
    if (props.type === "standard")
        return props.theme.colors.white;
    return exports.emphasisColor(props);
};
exports.emphasisColor = function (props) {
    switch (props.emphasis) {
        case "primary":
            return props.theme.colors.primary;
        case "secondary":
            return props.theme.colors.secondary;
        case "valid":
            return props.theme.colors.valid;
        case "invalid":
            return props.theme.colors.invalid;
    }
};
//# sourceMappingURL=utility.js.map