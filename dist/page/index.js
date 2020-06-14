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
exports.SimplePage = exports.Page = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("..");
var styles_1 = require("../styles");
// import { useStore } from '../../store'
var side_width = 256;
var PageWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding-top: 64px;\n    min-height: 100vh;\n    color: ", ";\n    background: ", ";\n"], ["\n    padding-top: 64px;\n    min-height: 100vh;\n    color: ", ";\n    background: ", ";\n"])), function (props) { return styles_1.themeColor(props.theme, { light: '#000', dark: '#fff' }); }, function (props) { return styles_1.themeColor(props.theme, { light: '#fff', dark: '#000' }); });
function Page(props) {
    var children = props.children;
    return (react_1.default.createElement(PageWrap, null, children));
}
exports.Page = Page;
var PageHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background: #f00;\n    z-index: 100000;\n    color: #fff;\n"], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background: #f00;\n    z-index: 100000;\n    color: #fff;\n"])));
var Side = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: fixed;\n    top: 64px;\n    left: 0;\n    bottom: 0;\n    width: ", "px;\n    /* right: 0; */\n    background: ", ";\n    z-index: 100;\n    bottom: 0;\n    border-right: 1px solid rgba(0, 0, 0, .12);\n    transition: all .2s;\n"], ["\n    position: fixed;\n    top: 64px;\n    left: 0;\n    bottom: 0;\n    width: ", "px;\n    /* right: 0; */\n    background: ", ";\n    z-index: 100;\n    bottom: 0;\n    border-right: 1px solid rgba(0, 0, 0, .12);\n    transition: all .2s;\n"])), side_width, function (props) { return styles_1.themeColor(props.theme, { light: '#fff', dark: '#424242' }); });
var Content = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding-left: 256px;\n    transition: all .2s;\n"], ["\n    padding-left: 256px;\n    transition: all .2s;\n"])));
var ToolBarRight = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n"], ["\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n"])));
var SideHeader = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    padding: 40px 0;\n    border-bottom: 1px solid rgba(0,0,0,.12);\n"], ["\n    padding: 40px 0;\n    border-bottom: 1px solid rgba(0,0,0,.12);\n"])));
var HeaderImage = styled_components_1.default.img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: block;\n    width: 80px;\n    margin: 0 auto;\n"], ["\n    display: block;\n    width: 80px;\n    margin: 0 auto;\n"
    // 创建自定义函数来写入方法
])));
// 创建自定义函数来写入方法
function useDocSize() {
    var _a = react_1.useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    }), size = _a[0], setSize = _a[1];
    // 写入方法
    // 使用 useCallback 缓存方法
    var onResize = react_1.useCallback(function () {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        });
    }, []);
    react_1.useEffect(function () {
        window.addEventListener('resize', onResize);
        return function () {
            window.removeEventListener('resize', onResize);
        };
    }, [onResize]);
    return size;
}
function SimplePage(props) {
    var title = props.title, children = props.children, action = props.action;
    var docSize = useDocSize();
    var _a = react_1.useState(docSize.width >= 800), sideVisible = _a[0], setSideVisible = _a[1];
    var sideType = docSize.width >= 1000 ? 'fixedSide' : 'drawer';
    // const [ count, setCount ] = useStore(0, 'count')
    var SideContent = (react_1.default.createElement("div", null,
        react_1.default.createElement(SideHeader, null,
            react_1.default.createElement(HeaderImage, { src: "https://icons.yunser.com/icons/app.svg" })),
        react_1.default.createElement(__1.List, null,
            react_1.default.createElement(__1.List.Item, { to: "/" },
                react_1.default.createElement(__1.List.Icon, { name: "home" }),
                react_1.default.createElement(__1.List.Title, null, "\u9996\u9875")),
            react_1.default.createElement(__1.List.Item, { to: "/components" },
                react_1.default.createElement(__1.List.Icon, { name: "info" }),
                react_1.default.createElement(__1.List.Title, null, "\u7EC4\u4EF6")),
            react_1.default.createElement(__1.List.Item, { to: "/about" },
                react_1.default.createElement(__1.List.Icon, { name: "info" }),
                react_1.default.createElement(__1.List.Title, null, "\u5173\u4E8E")),
            react_1.default.createElement(__1.List.Item, { href: "https://project.yunser.com/products/d0a7c630a55911eaa3824f27432dbf16", target: "_blank" },
                react_1.default.createElement(__1.List.Icon, { name: "help" }),
                react_1.default.createElement(__1.List.Title, null, "\u5E2E\u52A9")))));
    return (react_1.default.createElement(PageWrap, null,
        react_1.default.createElement(PageHeader, null,
            react_1.default.createElement(__1.AppBar, { color: { light: '#fff', dark: '#333' }, themeType: "light" },
                react_1.default.createElement(__1.ToolBar, null,
                    react_1.default.createElement(__1.IconButton, { onClick: function () {
                            console.log('click');
                            setSideVisible(!sideVisible);
                        } },
                        react_1.default.createElement(__1.Icon, { name: "menu" })),
                    react_1.default.createElement(__1.AppBar.Title, null, title),
                    react_1.default.createElement(ToolBarRight, null, action)))),
        react_1.default.createElement(Side, { style: { left: (sideVisible && sideType === 'fixedSide') ? 0 : (-side_width) } }, SideContent),
        react_1.default.createElement(Content, { style: { paddingLeft: (sideVisible && sideType === 'fixedSide') ? side_width : 0 } }, children),
        react_1.default.createElement(__1.Drawer, { open: sideVisible && sideType === 'drawer', onClose: function () { setSideVisible(false); } }, SideContent)));
}
exports.SimplePage = SimplePage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=index.js.map