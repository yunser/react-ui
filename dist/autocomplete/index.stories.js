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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var storybook_state_1 = require("@dump247/storybook-state");
var io_1 = require("react-icons/io");
var debounce_1 = __importDefault(require("debounce"));
var autocomplete_1 = require("../autocomplete");
var initialState = {
    items: [
        {
            value: "Item 1",
            data: "Item 1 data"
        },
        {
            value: "Item 2",
            data: "Item 2 data"
        },
        {
            value: "Item 3",
            data: "Item 3 data"
        }
    ],
    isLoading: false
};
var stories = react_1.storiesOf("Autocomplete", module);
stories.add("default", function () { return (React.createElement(autocomplete_1.Autocomplete, { label: "Search for...", items: initialState.items, onSelect: function () { return console.log("yeh!"); } })); }, {
    info: { inline: true }
});
stories.add("default loading", function () { return (React.createElement(autocomplete_1.Autocomplete, { label: "Search for...", items: initialState.items, onSelect: function () { return console.log("yeh!"); }, isLoading: true })); }, {
    info: { inline: true }
});
stories.add("icon primary", function () { return (React.createElement(autocomplete_1.Autocomplete, { icon: io_1.IoIosSearch, label: "Search for...", items: initialState.items, onSelect: function () { return console.log("yeh!"); } })); }, {
    info: { inline: true }
});
stories.add("icon", function () { return (React.createElement(autocomplete_1.Autocomplete, { icon: io_1.IoIosSearch, color: "#000000", label: "Search for...", items: initialState.items, onSelect: function () { return console.log("yeh!"); } })); }, {
    info: { inline: true }
});
stories.add("async", storybook_state_1.withState(initialState)(function (_a) {
    var store = _a.store;
    return (React.createElement(autocomplete_1.Autocomplete, { icon: io_1.IoIosSearch, color: "#000000", label: "Search for...", items: store.state.items, isLoading: store.state.isLoading, onInputChange: debounce_1.default(function (val) {
            store.set({ isLoading: true });
            setTimeout(function () {
                return store.set({
                    isLoading: false,
                    items: initialState.items.filter(function (item) { return item.value.includes(val); })
                });
            }, 1000);
        }, 200), onSelect: function () { return console.log("yeh!"); } }));
}), {
    info: { inline: true }
});
//# sourceMappingURL=index.stories.js.map