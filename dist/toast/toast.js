"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = exports.Toasts = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var styled_components_1 = __importDefault(require("styled-components"));
var ToastsWrap = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    z-index: 100000000;\n    /* background: #f00; */\n    padding: 16px;\n"], ["\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    z-index: 100000000;\n    /* background: #f00; */\n    padding: 16px;\n"])));
function getBg(props) {
    if (props.type === 'success') {
        return '#4caf50';
    }
    if (props.type === 'error') {
        return '#f44336';
    }
    if (props.type === 'info') {
        return '#2196f3';
    }
    if (props.type === 'warning') {
        return '#ff9800';
    }
    return "rgb(50, 50, 50)";
}
var ToastWrap = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    /* position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 100000000;\n    background: #f00; */\n    height: 48px;\n    padding: 0 16px;\n    /* border: 1px solid #f00; */\n    color: #fff;\n    background-color: ", ";\n    margin-top: 16px;\n    display: flex;\n    align-items: center;\n    border-radius: 4px;\n    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);\n"], ["\n    /* position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 100000000;\n    background: #f00; */\n    height: 48px;\n    padding: 0 16px;\n    /* border: 1px solid #f00; */\n    color: #fff;\n    background-color: ", ";\n    margin-top: 16px;\n    display: flex;\n    align-items: center;\n    border-radius: 4px;\n    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);\n"])), function (props) { return getBg(props); });
function Toasts(props) {
    var children = props.children, ref = props.ref, _a = props.notices, notices = _a === void 0 ? [] : _a;
    return (react_1.default.createElement(ToastsWrap, { ref: ref },
        children,
        notices.map(function (item) { return item; })));
}
exports.Toasts = Toasts;
function Toast(props) {
    var children = props.children, type = props.type;
    return (react_1.default.createElement(ToastWrap, { type: type }, children));
}
exports.Toast = Toast;
function createNotification() {
    var div = document.createElement('div');
    document.body.appendChild(div);
    var ref = react_1.default.createRef();
    var notices = [];
    react_dom_1.default.render((react_1.default.createElement(Toasts, { notices: notices, ref: ref },
        react_1.default.createElement("div", { id: "ui-divs" }))), div);
    setTimeout(function () {
    });
    return {
        addNotice: function (type, content) {
            notices.push(content);
            var p = document.getElementById('ui-divs');
            var div; // TODO
            if (p) {
                div = document.createElement('div');
                p.append(div);
                react_dom_1.default.render((react_1.default.createElement(Toast, { type: type }, content)), div);
            }
            // return ref.current.addNotice(notice)
            return {
                destroy: function () {
                    react_dom_1.default.unmountComponentAtNode(div);
                }
            };
        },
    };
}
var g_box; // TODO
function showToast(_a) {
    var type = _a.type, content = _a.content;
    if (!g_box) {
        g_box = createNotification();
    }
    var ret = g_box.addNotice(type, react_1.default.createElement("div", null, content));
    // return 
    setTimeout(function () {
        ret.destroy();
    }, 2000);
}
Toast.info = function (text) {
    showToast({
        type: 'info',
        content: text
    });
};
Toast.success = function (text) {
    showToast({
        type: 'success',
        content: text
    });
    // showToast(text)
};
Toast.error = function (text) {
    showToast({
        type: 'error',
        content: text
    });
    // showToast(text)
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=toast.js.map