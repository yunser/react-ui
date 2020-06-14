/// <reference types="react" />
interface ButtonProps {
    primary?: boolean;
    children?: string | JSX.Element | JSX.Element[];
    color?: string;
    big?: boolean;
    href?: string;
    target?: string;
    onClick?: any;
}
export declare function Button(props: ButtonProps): JSX.Element;
export declare function IconButton(props: ButtonProps): JSX.Element;
export declare function Fab(props: ButtonProps): JSX.Element;
export {};
