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
}
export declare const defaultTheme: Theme;
export declare function propsColor(props: any): any;
export declare function themeColor(theme: Theme, color: ThemeColor): string | undefined;
