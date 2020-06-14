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
var checkbox_1 = require("../checkbox");
var stories = react_1.storiesOf("Checkbox", module);
stories.add("default", function () { return React.createElement(checkbox_1.Checkbox, { label: "Username" }); }, {
    info: { inline: true }
});
stories.add("default disabled", function () { return React.createElement(checkbox_1.Checkbox, { label: "Description", state: "disabled" }); }, {
    info: { inline: true }
});
stories.add("default loading", function () { return React.createElement(checkbox_1.Checkbox, { label: "Description", state: "loading" }); }, {
    info: { inline: true }
});
stories.add("default valid", function () { return React.createElement(checkbox_1.Checkbox, { label: "Description", validationState: "valid" }); }, {
    info: { inline: true }
});
stories.add("default invalid", function () { return React.createElement(checkbox_1.Checkbox, { label: "Description", validationState: "invalid" }); }, {
    info: { inline: true }
});
stories.add("default invalid with error", function () { return (React.createElement(checkbox_1.Checkbox, { label: "Description", validationState: "invalid", message: "Message" })); }, {
    info: { inline: true }
});
//# sourceMappingURL=index.stories.js.map