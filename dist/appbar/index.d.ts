/// <reference types="react" />
interface AppbarProps {
    className?: string;
    primary?: boolean;
    children?: string | JSX.Element;
    color?: any;
    big?: boolean;
    style?: any;
    themeType?: string;
}
export declare function AppBar(props: AppbarProps): JSX.Element;
export declare namespace AppBar {
    var Title: (props: any) => JSX.Element;
}
export {};
