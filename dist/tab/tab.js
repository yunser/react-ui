"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
var ItemRoot = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    flex-grow: 1;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    background: #09f;\n"], ["\n    flex-grow: 1;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    background: #09f;\n"])));
function Item(props) {
    var _a = props.selected, selected = _a === void 0 ? false : _a, onClick = props.onClick, children = props.children;
    return (react_1.default.createElement(ItemRoot, { onClick: onClick, style: { borderBottom: selected ? '2px solid #f00' : 'none' } }, children));
}
function Tab(props) {
    var value = props.value, onChange = props.onChange, children = props.children;
    var newChildren = react_1.default.Children.map(children, function (child, index) {
        if (!react_1.default.isValidElement(child)) {
            return null;
        }
        return react_1.default.cloneElement(child, {
            // fullWidth: variant === 'fullWidth',
            // indicator: selected && !mounted && indicator,
            // selected,
            // selectionFollowsFocus,
            // onChange,
            // textColor,
            // value: childValue,
            onClick: function () {
                onChange && onChange(child.props.value);
            },
            selected: value === child.props.value
        });
    });
    return (react_1.default.createElement(Root, null, newChildren));
}
exports.Tab = Tab;
Tab.Item = Item;
var templateObject_1, templateObject_2;
//# sourceMappingURL=tab.js.map