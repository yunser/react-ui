"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
var Item = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 32px;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: 1px solid #000; */\n    border-radius: 50%;\n    margin: 0 3px;\n    cursor: pointer;\n    &:hover {\n        background-color: #eee;\n    }\n"], ["\n    width: 32px;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* border: 1px solid #000; */\n    border-radius: 50%;\n    margin: 0 3px;\n    cursor: pointer;\n    &:hover {\n        background-color: #eee;\n    }\n"])));
function Pagination(props) {
    var _a = props.page, page = _a === void 0 ? 1 : _a, onChange = props.onChange, _b = props.totalPage, totalPage = _b === void 0 ? 1 : _b;
    var items = [];
    items.push('prev');
    var preArr = [];
    if (page > 1) {
        for (var idx = page - 1; idx >= 1; idx--) {
            preArr.push(idx);
        }
        if (preArr.length > 3) {
            preArr = [preArr[0], '...', preArr[preArr.length - 1]];
        }
        items.push.apply(items, preArr.reverse());
    }
    items.push(page);
    if (page < totalPage) {
        var arr = [];
        for (var idx = page + 1; idx <= totalPage; idx++) {
            arr.push(idx);
        }
        if (arr.length > 3) {
            arr = [arr[0], '...', arr[arr.length - 1]];
        }
        items.push.apply(items, arr);
    }
    items.push('next');
    return (react_1.default.createElement(Root, null, items.map(function (item) {
        return (react_1.default.createElement(Item, { key: item, onClick: function () {
                onChange && onChange(item);
            }, style: {
                backgroundColor: item === page ? '#ddd' : undefined
            } }, item));
    })));
}
exports.Pagination = Pagination;
var templateObject_1, templateObject_2;
//# sourceMappingURL=pagination.js.map