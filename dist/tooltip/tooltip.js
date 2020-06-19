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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var grey700 = '#999';
var Title = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 22px;\n    color: #fff;\n    z-index: 100000000;\n    background: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 8px;\n    border-radius: 4px;\n    opacity: .9;\n    font-size: 12px;\n"], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 22px;\n    color: #fff;\n    z-index: 100000000;\n    background: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 8px;\n    border-radius: 4px;\n    opacity: .9;\n    font-size: 12px;\n"])), grey700);
function Tooltip(props) {
    var children = props.children, title = props.title;
    var refRoot = react_1.useRef(null);
    var refTitle = react_1.useRef(null);
    var refButton = react_1.useRef(null);
    var _a = react_1.useState({
        x: 0,
        y: 0
    }), pot = _a[0], setPot = _a[1];
    var _b = react_1.useState(false), titleVisible = _b[0], setTitleVisible = _b[1];
    react_1.useEffect(function () {
        console.log('ref.current && refTitle.current', refButton.current);
        if (refRoot.current && refTitle.current) {
            var rect = refRoot.current.getBoundingClientRect(); // TODO ref.current as HTMLElement
            var titleRect = refTitle.current.getBoundingClientRect(); // TODO ref.current as HTMLElement
            // let asd = document.getElementById('asd')
            // asd?.getBoundingClientRect()
            // console.log('rect', rect)
            setPot({
                x: rect.left + rect.width / 2 - titleRect.width / 2,
                y: rect.top - titleRect.height - 14
            });
        }
    }, [titleVisible]);
    // const [ hovered ] = useH
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(children.type, __assign({}, children.props, { ref: refRoot, onMouseEnter: function () {
                setTitleVisible(true);
            }, onMouseLeave: function () {
                setTitleVisible(false);
            } }), children.props.children),
        titleVisible &&
            react_1.default.createElement(Title, { ref: refTitle, style: { left: pot.x, top: pot.y } }, title)));
}
exports.Tooltip = Tooltip;
var templateObject_1;
//# sourceMappingURL=tooltip.js.map