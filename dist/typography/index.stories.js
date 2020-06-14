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
var typography_1 = require("../typography");
var stories = react_1.storiesOf("Typography", module);
stories.add("H1", function () { return React.createElement(typography_1.H1, null, "Header 1 size"); }, { info: { inline: true } });
stories.add("H2", function () { return React.createElement(typography_1.H2, null, "Header 2 size"); }, { info: { inline: true } });
stories.add("H3", function () { return React.createElement(typography_1.H3, null, "Header 3 size"); }, { info: { inline: true } });
//# sourceMappingURL=index.stories.js.map