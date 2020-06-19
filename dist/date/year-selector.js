"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearSelector = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var List = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    height: 200px;\n    overflow: auto;\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    height: 200px;\n    overflow: auto;\n"])));
var Item = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 80px;\n    border: 1px solid #000;\n    margin-right: 8px;\n    margin-bottom: 8px;\n"], ["\n    width: 80px;\n    border: 1px solid #000;\n    margin-right: 8px;\n    margin-bottom: 8px;\n"])));
function YearSelector(props) {
    var value = props.value, onChange = props.onChange;
    // const years = []
    // for (let i = 1900; i <= 2100; i++) {
    //     years
    // }
    var years = Array.from({ length: 200 }, function (v, i) { return 1900 + i; });
    // console.log('months', months)
    return (react_1.default.createElement(List, null, years.map(function (item) {
        return (react_1.default.createElement(Item, { onClick: function () {
                onChange && onChange(item);
            }, style: {
                color: item === value ? '#f00' : '000'
            } }, item));
    })));
}
exports.YearSelector = YearSelector;
var templateObject_1, templateObject_2;
//# sourceMappingURL=year-selector.js.map