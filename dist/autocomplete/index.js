"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var downshift_1 = __importDefault(require("downshift"));
var color_1 = __importDefault(require("color"));
var input_1 = require("../input");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var InputStyled = styled_components_1.default(input_1.Input)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var Results = styled_components_1.default.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  list-style-type: none;\n  margin-top: 0.25rem;\n  padding-inline-start: 0px;\n  padding: 0;\n  overflow: hidden;\n\n  box-shadow: ", ";\n\n  border-radius: ", ";\n\n  color: ", ";\n  background-color: ", ";\n\n  z-index: ", ";\n\n  &:empty {\n    border-bottom: 0px;\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  list-style-type: none;\n  margin-top: 0.25rem;\n  padding-inline-start: 0px;\n  padding: 0;\n  overflow: hidden;\n\n  box-shadow: ", ";\n\n  border-radius: ", ";\n\n  color: ", ";\n  background-color: ", ";\n\n  z-index: ", ";\n\n  &:empty {\n    border-bottom: 0px;\n  }\n"])), function (props) { return props.theme.boxShadow; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.color || props.theme.colors.complementary; }, function (props) { return props.theme.colors.white; }, function (props) { return props.theme.zIndex.dropdown; });
var Result = styled_components_1.default.li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  user-select: none;\n  color: ", ";\n  background-color: ", ";\n  font-weight: ", ";\n  padding-left: 1rem;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"], ["\n  user-select: none;\n  color: ", ";\n  background-color: ",
    ";\n  font-weight: ", ";\n  padding-left: 1rem;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"])), function (props) { return props.color || props.theme.colors.complementary; }, function (props) {
    return props.isHighlighted
        ? color_1.default(props.color || props.theme.colors.complementary)
            .mix(color_1.default("white"), 0.9)
            .toString()
        : "white";
}, function (props) { return props.theme.font.fontWeightRegular; });
var NoResult = styled_components_1.default.li(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  user-select: none;\n  color: ", ";\n  background-color: \"white\";\n  padding-left: 1rem;\n\n  border-bottom: 1px solid\n    ", ";\n\n  &:last-child {\n    border-bottom: none;\n  }\n"], ["\n  user-select: none;\n  color: ", ";\n  background-color: \"white\";\n  padding-left: 1rem;\n\n  border-bottom: 1px solid\n    ", ";\n\n  &:last-child {\n    border-bottom: none;\n  }\n"])), function (props) { return props.color || props.theme.colors.complementary; }, function (props) { return props.color || props.theme.colors.complementary; });
var Loading = styled_components_1.default.li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  user-select: none;\n  padding-left: 1rem;\n  background: white;\n  color: ", ";\n  background-image: linear-gradient(\n    to right,\n    ", "\n      0%,\n    ", "\n      20%,\n    ", "\n      40%,\n    ", "\n      100%\n  );\n\n  border-bottom: none;\n\n  background-repeat: no-repeat;\n  background-size: 800px 104px;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: shimmer;\n  animation-timing-function: linear;\n\n  @keyframes shimmer {\n    0% {\n      background-position: -1200px 0;\n    }\n    100% {\n      background-position: 1200px 0;\n    }\n  }\n"], ["\n  user-select: none;\n  padding-left: 1rem;\n  background: white;\n  color: ",
    ";\n  background-image: linear-gradient(\n    to right,\n    ",
    "\n      0%,\n    ",
    "\n      20%,\n    ",
    "\n      40%,\n    ",
    "\n      100%\n  );\n\n  border-bottom: none;\n\n  background-repeat: no-repeat;\n  background-size: 800px 104px;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: shimmer;\n  animation-timing-function: linear;\n\n  @keyframes shimmer {\n    0% {\n      background-position: -1200px 0;\n    }\n    100% {\n      background-position: 1200px 0;\n    }\n  }\n"])), function (props) {
    return color_1.default(props.color || props.theme.colors.complementary)
        .mix(color_1.default("white"), 0.3)
        .toString();
}, function (props) {
    return color_1.default(props.color || props.theme.colors.complementary)
        .mix(color_1.default("white"), 0.98)
        .toString();
}, function (props) {
    return color_1.default(props.color || props.theme.colors.complementary)
        .mix(color_1.default("white"), 0.96)
        .toString();
}, function (props) {
    return color_1.default(props.color || props.theme.colors.complementary)
        .mix(color_1.default("white"), 0.95)
        .toString();
}, function (props) {
    return color_1.default(props.color || props.theme.colors.complementary)
        .mix(color_1.default("white"), 0.98)
        .toString();
});
var itemToString = function (item) {
    return item ? item.value : "";
};
var Autocomplete = function (_a) {
    var items = _a.items, onSelect = _a.onSelect, onInputChange = _a.onInputChange, isLoading = _a.isLoading, initialSelectedItem = _a.initialSelectedItem, className = _a.className, inputProps = _a.inputProps, restOfProps = __rest(_a, ["items", "onSelect", "onInputChange", "isLoading", "initialSelectedItem", "className", "inputProps"]);
    debugger;
    var onChangeMemo = react_1.useCallback(function (selection) { return selection && onSelect(selection); }, []);
    var onInputChangeMemo = react_1.useCallback(function (inputValue) { return onInputChange(inputValue); }, []);
    return (react_1.default.createElement(downshift_1.default, { onChange: onChangeMemo, onInputValueChange: onInputChangeMemo, itemToString: itemToString, initialSelectedItem: initialSelectedItem }, function (_a) {
        var getInputProps = _a.getInputProps, getItemProps = _a.getItemProps, getLabelProps = _a.getLabelProps, getMenuProps = _a.getMenuProps, isOpen = _a.isOpen, highlightedIndex = _a.highlightedIndex, selectedItem = _a.selectedItem;
        return (react_1.default.createElement("div", { className: className },
            react_1.default.createElement(Container, null,
                react_1.default.createElement(InputStyled, __assign({}, restOfProps, { inputProps: getInputProps(inputProps), labelProps: getLabelProps() })),
                react_1.default.createElement(Results, __assign({}, getMenuProps(), { color: restOfProps.color }), isLoading ? (react_1.default.createElement(Loading, { color: restOfProps.color }, "\u00A0")) : isOpen && items.length == 0 ? (react_1.default.createElement(NoResult, { color: restOfProps.color }, "No Results")) : (isOpen &&
                    items.map(function (item, index) { return (react_1.default.createElement(Result, __assign({ isHighlighted: highlightedIndex == index, isSelected: selectedItem == item, key: item.value }, getItemProps({ item: item }), { color: restOfProps.color }), item.value)); }))))));
    }));
};
exports.Autocomplete = Autocomplete;
Autocomplete.defaultProps = {
    type: "text",
    state: "normal",
    validationState: "none",
    isLoading: false,
    items: [],
    onSelect: function () { },
    onInputChange: function () { },
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=index.js.map