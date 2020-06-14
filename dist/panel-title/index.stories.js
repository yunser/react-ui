"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var panel_title_1 = require("../panel-title");
var io_1 = require("react-icons/io");
var stories = react_1.storiesOf("PanelTitle", module);
stories.add("default", function () { return React.createElement(panel_title_1.PanelTitle, null, "Highest Value Assets"); }, {
    info: { inline: true }
});
stories.add("default with icon", function () { return (React.createElement(panel_title_1.PanelTitle, null,
    React.createElement(io_1.IoMdFunnel, null),
    " Highest Value Assets")); }, {
    info: { inline: true }
});
//# sourceMappingURL=index.stories.js.map