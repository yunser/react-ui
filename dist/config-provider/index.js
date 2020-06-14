"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.ConfigProvider = void 0;
var react_1 = __importDefault(require("react"));
var _a = react_1.default.createContext({
    asd: 0
}), Provider = _a.Provider, Consumer = _a.Consumer;
function ConfigProvider(props) {
    var children = props.children;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Provider, { value: { asd: 1 } }, children)));
}
exports.ConfigProvider = ConfigProvider;
function Text(props) {
    return react_1.default.createElement("div", null,
        react_1.default.createElement(Consumer, null, function (value) { return value.asd; }));
}
exports.Text = Text;
//# sourceMappingURL=index.js.map