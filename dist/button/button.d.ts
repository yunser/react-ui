import React from 'react';
export interface ButtonProps {
    primary?: boolean;
    children?: string | JSX.Element | JSX.Element[];
    color?: string;
    big?: boolean;
    href?: string;
    target?: string;
    onClick?: any;
    style?: any;
    ref?: any;
    forwardRef?: any;
    disabled?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<Pick<ButtonProps, "primary" | "big" | "style" | "color" | "target" | "href" | "children" | "onClick" | "disabled" | "forwardRef"> & React.RefAttributes<unknown>>;
export declare function IconButton(props: ButtonProps): JSX.Element;
export declare function Fab(props: ButtonProps): JSX.Element;
