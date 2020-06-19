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
exports.Select = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var styles_1 = require("../styles");
var ItemRoot = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: 16px;\n    padding: 6px 16px;\n    cursor: pointer;\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.04);\n    }\n"], ["\n    font-size: 16px;\n    padding: 6px 16px;\n    cursor: pointer;\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.04);\n    }\n"])));
function Item(props) {
    var selected = props.selected, children = props.children, onChange = props.onChange;
    return (react_1.default.createElement(ItemRoot, { onClick: function () {
            onChange && onChange(!selected);
        }, style: { background: selected ? '#eee' : '#fff' } }, children));
}
var List = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 100000;\n    background: #fff;\n    z-index: ", ";\n    box-shadow: ", ";\n    /* box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12); */\n    padding: 8px 0;\n    min-width: 120px;\n    max-height: 200px;\n    overflow: auto;\n"], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 100000;\n    background: #fff;\n    z-index: ", ";\n    box-shadow: ", ";\n    /* box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12); */\n    padding: 8px 0;\n    min-width: 120px;\n    max-height: 200px;\n    overflow: auto;\n"])), function (props) { return styles_1.propsZIndexByKey(props, 'select'); }, function (props) { return styles_1.propsShadowByKey(props, 'select'); });
var Root = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: inline-block;\n    position: relative;\n    min-width: 160px;\n    padding: 8px 16px;\n    /* border-bottom: 1px solid #000; */\n    border: 1px solid #000;\n"], ["\n    display: inline-block;\n    position: relative;\n    min-width: 160px;\n    padding: 8px 16px;\n    /* border-bottom: 1px solid #000; */\n    border: 1px solid #000;\n"])));
var Mark = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1000;\n    /* background: #000; */\n"], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1000;\n    /* background: #000; */\n"])));
var Value = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    min-width: 40px;\n"], ["\n    min-width: 40px;\n"])));
function Select(props) {
    // console.log()
    var value = props.value, onChange = props.onChange, children = props.children;
    var _a = react_1.useState(false), menuVisible = _a[0], setMeenuVisible = _a[1];
    var selectedChildren = '';
    var newChildren = react_1.default.Children.map(children, function (child, index) {
        if (!react_1.default.isValidElement(child)) {
            return null;
        }
        if (value === child.props.value) {
            selectedChildren = child.props.children;
        }
        return react_1.default.cloneElement(child, {
            // fullWidth: variant === 'fullWidth',
            // indicator: selected && !mounted && indicator,
            // selected,
            // selectionFollowsFocus,
            // onChange,
            // textColor,
            // value: childValue,
            // onClick: () => {
            //     onChange && onChange(child.props.value)
            // },
            onChange: function (value) {
                onChange && onChange(child.props.value);
                setMeenuVisible(false);
            },
            selected: value === child.props.value
        });
    });
    return (react_1.default.createElement(Root, null,
        react_1.default.createElement("div", { onClick: function () {
                setMeenuVisible(true);
            } },
            react_1.default.createElement(Value, null, selectedChildren),
            !menuVisible &&
                react_1.default.createElement("svg", { style: { width: 40 }, fill: "#999", className: "MuiSvgIcon-root MuiSelect-icon", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                    react_1.default.createElement("path", { d: "M7 10l5 5 5-5z" })),
            menuVisible &&
                react_1.default.createElement("svg", { style: {
                        width: 40,
                        transform: 'rotate(180deg)'
                    }, className: "MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOpen", focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" },
                    react_1.default.createElement("path", { d: "M7 10l5 5 5-5z" }))),
        menuVisible &&
            react_1.default.createElement(Mark, { onClick: function () {
                    setMeenuVisible(false);
                } }),
        menuVisible &&
            react_1.default.createElement(List, null, newChildren)));
}
exports.Select = Select;
Select.Item = Item;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=select.js.map