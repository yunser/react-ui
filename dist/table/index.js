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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var TableWrap = styled_components_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-collapse: collapse;\n"], ["\n    border-collapse: collapse;\n"])));
var Th = styled_components_1.default.th(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: 1px solid #000;\n"], ["\n    border: 1px solid #000;\n"])));
var Tr = styled_components_1.default.tr(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    /* border: 1px solid #000; */\n"], ["\n    /* border: 1px solid #000; */\n"])));
var Td = styled_components_1.default.td(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    border: 1px solid #000;\n"], ["\n    border: 1px solid #000;\n"])));
function Table(props) {
    var children = props.children, columns = props.columns, _a = props.data, data = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(TableWrap, __assign({}, props),
        children,
        !!columns &&
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null, columns.map(function (item, index) {
                    return (react_1.default.createElement(Th, { key: index }, item.title));
                }))),
        react_1.default.createElement("tbody", null, !!columns && data.map(function (dataItem, idx) {
            return (react_1.default.createElement(Tr, { key: idx }, columns.map(function (column, index) {
                return (react_1.default.createElement(Td, { key: index }, dataItem[column.dataKey]));
            })));
        }))));
}
exports.Table = Table;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=index.js.map