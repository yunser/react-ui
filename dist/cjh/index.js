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
exports.Link = void 0;
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var AStyled = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n\n  text-decoration: none;\n  color: ", ";\n\n  cursor: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n\n  text-decoration: none;\n  color: ",
    ";\n\n  cursor: ", ";\n"])), function (props) {
    return props.disabled
        ? props.theme.colors.disabled
        : props.theme.colors.darkComplementary;
}, function (props) { return (props.disabled ? "not-allowed" : "pointer"); });
var IconWrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: inherit;\n  color: inherit;\n  display: flex;\n  margin-right: 0.25rem;\n"], ["\n  font-size: inherit;\n  color: inherit;\n  display: flex;\n  margin-right: 0.25rem;\n"])));
var Link = function (_a) {
    var _b = _a.href, href = _b === void 0 ? "#" : _b, text = _a.text, ariaLabel = _a.ariaLabel, Icon = _a.icon, IconSizeInPx = _a.IconSizeInPx, _c = _a.onClick, onClick = _c === void 0 ? function () { } : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.openInNewTab, openInNewTab = _e === void 0 ? false : _e, children = _a.children, className = _a.className;
    return (React.createElement(AStyled, { disabled: disabled, href: href, "aria-label": ariaLabel, className: className, target: openInNewTab ? "_blank" : undefined, rel: openInNewTab ? "noopener noreferrer" : undefined, onClick: function (ev) {
            if (href === "#") {
                ev.preventDefault();
                onClick();
            }
        } },
        React.createElement("div", null),
        Icon && (React.createElement(IconWrapper, null,
            React.createElement(Icon, { size: IconSizeInPx }))),
        text,
        children));
};
exports.Link = Link;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map