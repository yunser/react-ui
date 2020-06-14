"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorFromState = void 0;
exports.colorFromState = function (props) {
    if (props.state === "disabled")
        return props.theme.colors.disabled;
    switch (props.validationState) {
        case "none":
            return props.color || props.theme.colors.complementary;
        case "valid":
            return props.theme.colors.valid;
        case "invalid":
            return props.theme.colors.invalid;
    }
};
//# sourceMappingURL=utility.js.map