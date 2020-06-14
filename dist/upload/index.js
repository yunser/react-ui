"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.Upload = void 0;
var React = __importStar(require("react"));
var react_dropzone_1 = require("react-dropzone");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var color_1 = __importDefault(require("color"));
var spinner_1 = require("../spinner");
var image_1 = require("../image");
var DropStyled = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: inherit;\n  width: inherit;\n  border-width: 0.1rem;\n  border-radius: ", ";\n  border-color: ", ";\n  background-color: ", ";\n  border-style: dashed;\n  outline: none;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: inherit;\n  width: inherit;\n  border-width: 0.1rem;\n  border-radius: ", ";\n  border-color: ", ";\n  background-color: ",
    ";\n  border-style: dashed;\n  outline: none;\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.complementary; }, function (props) {
    return color_1.default(props.theme.colors.complementary)
        .mix(color_1.default("white"), 0.9)
        .toString();
});
var ThumbsContainer = styled_components_1.default.aside(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var ThumbContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var ThumbStyled = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  overflow: hidden;\n  box-shadow: ", ";\n  border-radius: ", ";\n  border: 0.1rem solid ", ";\n  margin: 1rem 1rem 0rem 1rem;\n"], ["\n  background-color: ",
    ";\n  overflow: hidden;\n  box-shadow: ", ";\n  border-radius: ", ";\n  border: 0.1rem solid ", ";\n  margin: 1rem 1rem 0rem 1rem;\n"])), function (props) {
    return color_1.default(props.theme.colors.complementary)
        .mix(color_1.default("white"), 0.8)
        .toString();
}, function (props) { return props.theme.boxShadow; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.complementary; });
var ThumbInner = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  min-width: 0;\n"], ["\n  display: flex;\n  min-width: 0;\n"])));
var ThumbTitle = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  text-align: center;\n"], ["\n  padding: 0.5rem 0.5rem 0rem 0.5rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  text-align: center;\n"])));
var StyledImage = styled_components_1.default(image_1.Image)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: block;\n  max-width: 200px;\n  max-height: 200px;\n  width: auto;\n"], ["\n  display: block;\n  max-width: 200px;\n  max-height: 200px;\n  width: auto;\n"])));
var StyledSpinner = styled_components_1.default(spinner_1.Spinner)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin: 0.5rem;\n  color: ", ";\n"], ["\n  margin: 0.5rem;\n  color: ", ";\n"])), function (props) { return props.theme.colors.complementary; });
var TextStyled = styled_components_1.default.p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin: 0rem;\n  padding: 0.5rem;\n  color: ", ";\n"], ["\n  margin: 0rem;\n  padding: 0.5rem;\n  color: ", ";\n"])), function (props) { return props.theme.colors.complementary; });
function anyEndsWith(fileName, extensions) {
    return (extensions.filter(function (extension) {
        return fileName.toLowerCase().endsWith(extension.toLowerCase());
    }).length > 0);
}
var Upload = function (_a) {
    var _b = _a.accept, accept = _b === void 0 ? "image/*" : _b, _c = _a.text, text = _c === void 0 ? "Drag and drop or click here to upload" : _c, _d = _a.shouldShowPreview, shouldShowPreview = _d === void 0 ? true : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e, _f = _a.onDrop, onDrop = _f === void 0 ? function () { } : _f, className = _a.className, file = _a.file;
    var onDropCallback = react_1.useCallback(function (acceptedFiles) {
        onDrop(acceptedFiles[0]);
    }, []);
    var _g = react_dropzone_1.useDropzone({
        accept: accept,
        multiple: false,
        onDrop: onDropCallback
    }), getRootProps = _g.getRootProps, getInputProps = _g.getInputProps;
    return (React.createElement("div", { className: className },
        React.createElement(DropStyled, __assign({}, getRootProps()),
            file && (React.createElement(ThumbsContainer, null,
                React.createElement(ThumbContainer, null,
                    shouldShowPreview && (React.createElement(ThumbStyled, { key: file.url },
                        React.createElement(ThumbInner, null,
                            React.createElement(StyledImage, { alt: "Image uploading", src: anyEndsWith(file.name, [
                                    ".jpg",
                                    ".jpeg",
                                    ".png",
                                    ".bmp"
                                ])
                                    ? file.url
                                    : "/static/file.png" })))),
                    React.createElement(ThumbTitle, { title: file.name }, file.name)))),
            React.createElement("input", __assign({}, getInputProps())),
            isLoading ? (React.createElement(StyledSpinner, null)) : (text && React.createElement(TextStyled, { title: text }, text)))));
};
exports.Upload = Upload;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=index.js.map