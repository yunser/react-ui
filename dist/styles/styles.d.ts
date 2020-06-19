export interface ThemeColor {
    light?: string;
    dark?: string;
}
export interface Palatte {
    type: string;
    common: any;
    primary: ThemeColor;
    secondary: ThemeColor;
}
export interface Theme {
    palatte: Palatte;
    shadows: string[];
    level?: any;
    zIndexs: number[];
}
export declare const defaultTheme: Theme;
export declare function propsColor(props: any): any;
export declare function propsZIndexByKey(props: any, key: string): any;
export declare function propsShadowByKey(props: any, key: string): any;
export declare function themeColor(theme: Theme, color: ThemeColor): string | undefined;
export declare const grep: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
