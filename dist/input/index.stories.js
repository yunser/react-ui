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
var io_1 = require("react-icons/io");
var input_1 = require("../input");
var stories = react_1.storiesOf("Input", module);
stories.add("default", function () { return React.createElement(input_1.Input, { label: "Username" }); }, {
    info: { inline: true }
});
stories.add("default disabled", function () { return React.createElement(input_1.Input, { label: "Username", state: "disabled" }); }, {
    info: { inline: true }
});
stories.add("default loading", function () { return React.createElement(input_1.Input, { label: "Username", state: "loading" }); }, {
    info: { inline: true }
});
stories.add("default valid", function () { return React.createElement(input_1.Input, { label: "Username", validationState: "valid" }); }, {
    info: { inline: true }
});
stories.add("default invalid", function () { return React.createElement(input_1.Input, { label: "Username", validationState: "invalid" }); }, {
    info: { inline: true }
});
stories.add("default invalid with error", function () { return React.createElement(input_1.Input, { label: "Username", validationState: "invalid", message: "Message" }); }, {
    info: { inline: true }
});
stories.add("With mail icon", function () { return React.createElement(input_1.Input, { label: "Email", icon: io_1.IoIosMail }); }, {
    info: { inline: true }
});
stories.add("With mail icon disabled", function () { return React.createElement(input_1.Input, { label: "Email", icon: io_1.IoIosMail, state: "disabled" }); }, {
    info: { inline: true }
});
stories.add("With mail icon valid", function () { return React.createElement(input_1.Input, { label: "Email", icon: io_1.IoIosMail, validationState: "valid" }); }, {
    info: { inline: true }
});
stories.add("With mail icon invalid", function () { return React.createElement(input_1.Input, { label: "Email", icon: io_1.IoIosMail, validationState: "invalid" }); }, {
    info: { inline: true }
});
stories.add("With mail icon invalid message", function () { return (React.createElement(input_1.Input, { label: "Email", icon: io_1.IoIosMail, validationState: "invalid", message: "This mail aint no good homie!" })); }, {
    info: { inline: true }
});
stories.add("password type", function () { return React.createElement(input_1.Input, { label: "Password", type: "password" }); }, {
    info: { inline: true }
});
//# sourceMappingURL=index.stories.js.map