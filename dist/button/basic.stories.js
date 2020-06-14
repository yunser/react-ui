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
var addon_actions_1 = require("@storybook/addon-actions");
var button_1 = require("../button");
var io_1 = require("react-icons/io");
var stories = react_1.storiesOf("Button/Basic", module);
stories.add("Default Primary", function () { return (React.createElement(button_1.Button, { text: "button", shape: "basic", onClick: addon_actions_1.action("button-click") })); });
stories.add("Fluid Primary", function () { return (React.createElement(button_1.Button, { text: "button", shape: "basic", onClick: addon_actions_1.action("button-click"), fluid: true })); });
stories.add("Disabled Primary", function () { return (React.createElement(button_1.Button, { text: "button", shape: "basic", onClick: addon_actions_1.action("button-click"), state: "disabled" })); });
stories.add("Loading Primary", function () { return (React.createElement(button_1.Button, { text: "button", shape: "basic", onClick: addon_actions_1.action("button-click"), state: "loading" })); });
stories.add("Plus Icon Primary", function () { return (React.createElement(button_1.Button, { icon: io_1.IoIosAdd, text: "button", shape: "basic", onClick: addon_actions_1.action("button-click") })); });
stories.add("Fluid Basket Icon Primary", function () { return (React.createElement(button_1.Button, { icon: io_1.IoIosBasket, text: "button", shape: "basic", onClick: addon_actions_1.action("button-click"), fluid: true })); });
stories.add("Fluid Loading Primary", function () { return (React.createElement(button_1.Button, { text: "button", onClick: addon_actions_1.action("button-click"), shape: "basic", state: "loading", fluid: true })); });
stories.add("Default Secondary", function () { return (React.createElement(button_1.Button, { text: "button", shape: "basic", onClick: addon_actions_1.action("button-click"), emphasis: "secondary" })); });
stories.add("Fluid Secondary", function () { return (React.createElement(button_1.Button, { text: "button", shape: "basic", onClick: addon_actions_1.action("button-click"), emphasis: "secondary", fluid: true })); });
stories.add("Disabled Secondary", function () { return (React.createElement(button_1.Button, { text: "button", shape: "basic", onClick: addon_actions_1.action("button-click"), emphasis: "secondary", state: "disabled" })); });
stories.add("Loading Secondary", function () { return (React.createElement(button_1.Button, { text: "button", shape: "basic", onClick: addon_actions_1.action("button-click"), emphasis: "secondary", state: "loading" })); });
//# sourceMappingURL=basic.stories.js.map