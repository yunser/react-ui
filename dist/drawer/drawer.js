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
exports.Drawer = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var styles_1 = require("../styles");
var DrawerWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
var transitionParam = '225ms cubic-bezier(0.4, 0, 0.2, 1)';
var draw_width = 256;
var drawer_z = 1000000;
var Content = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: ", "px;\n    bottom: 0;\n    background: #fff;\n    z-index: ", ";\n    transition: left ", ";\n"], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: ", "px;\n    bottom: 0;\n    background: #fff;\n    z-index: ", ";\n    transition: left ", ";\n"])), draw_width, drawer_z, transitionParam);
var Mask = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    box-shadow: ", ";\n    /* box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); */\n    padding: 10px;\n    padding: 6px 16px;\n    /* cursor: pointer; */\n    z-index: 1000000;\n"], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    box-shadow: ", ";\n    /* box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); */\n    padding: 10px;\n    padding: 6px 16px;\n    /* cursor: pointer; */\n    z-index: 1000000;\n"])), function (props) { return styles_1.propsShadowByKey(props, 'drawer'); });
function Drawer(props) {
    var children = props.children, _a = props.visible, open = _a === void 0 ? true : _a, onClose = props.onClose;
    return (
    // <Modal
    //     visible={true}
    //     onClose={onClose}
    // >
    //     1234
    // </Modal>
    react_1.default.createElement(DrawerWrap, __assign({}, props),
        open &&
            react_1.default.createElement(Mask, { onClick: function () { onClose && onClose(); } }),
        react_1.default.createElement(Content, { style: { left: open ? 0 : (-draw_width) } }, children)));
}
exports.Drawer = Drawer;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=drawer.js.map