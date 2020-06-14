"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeColor = exports.propsColor = exports.defaultTheme = void 0;
exports.defaultTheme = {
    palatte: {
        // type: 'light',
        type: 'dark',
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: {
            light: '#4285f4',
            // light: '#999',
            // light: '#f90',
            dark: '#4285f4',
        },
        secondary: {
            light: '#ff4081',
            dark: '#4285f4',
        }
    }
};
function propsColor(props) {
    var theme = props.theme;
    if (theme) {
        console.log('props.color', props.color);
        var themeType = props.theme.palatte.type === 'light' ? 'light' : 'dark';
        if (props.color === 'primary') {
            return theme.palatte.primary[themeType];
        }
        else if (props.color === 'secondary') {
            return theme.palatte.secondary[themeType];
        }
        else if (props.color) {
            return props.color;
        }
    }
    return '#999';
}
exports.propsColor = propsColor;
function themeColor(theme, color) {
    var themeType = theme.palatte.type === 'light' ? 'light' : 'dark';
    return color[themeType];
}
exports.themeColor = themeColor;
//# sourceMappingURL=index.js.map