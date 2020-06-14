"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empty = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var EmptyWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    /* color: #fff; */\n    /* background-color: rgba(0, 0, 0, .12); */\n"], ["\n    /* color: #fff; */\n    /* background-color: rgba(0, 0, 0, .12); */\n"])));
var Text = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n"], ["\n"])));
function Empty() {
    // const { children, color } = props
    console.log('empty渲染');
    return (react_1.default.createElement(EmptyWrap, null,
        react_1.default.createElement(Text, null, "\u5185\u5BB9\u4E3A\u7A7A")));
}
exports.Empty = Empty;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map