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
var link_1 = require("../link");
var io_1 = require("react-icons/io");
var stories = react_1.storiesOf("Link", module);
stories.add("default", function () { return React.createElement(link_1.Link, { ariaLabel: "this is a link", text: "This is a link" }); }, {
    info: { inline: true }
});
stories.add("default with icon", function () { return (React.createElement(link_1.Link, { ariaLabel: "This is a link", icon: io_1.IoMdSettings, text: "This is a link" })); }, { info: { inline: true } });
//# sourceMappingURL=index.stories.js.map