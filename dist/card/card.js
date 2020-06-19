"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var styles_1 = require("../styles");
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";   \n"], ["\n    box-shadow: ", ";   \n"])), function (props) { return styles_1.propsShadowByKey(props, 'button'); });
var Content = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding: 16px;\n"], ["\n    padding: 16px;\n"
    // function Content() {
    //     return (
    //         <ContentRoot></ContentRoot>
    //     )
    // }
])));
// function Content() {
//     return (
//         <ContentRoot></ContentRoot>
//     )
// }
function Card(props) {
    var children = props.children;
    return (react_1.default.createElement(Root, null, children));
}
exports.Card = Card;
Card.Content = Content;
var templateObject_1, templateObject_2;
//# sourceMappingURL=card.js.map