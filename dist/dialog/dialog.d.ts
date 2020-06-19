import React, { ReactNode } from 'react';
interface DialogProps {
    children?: ReactNode;
    visible?: boolean;
    onClose?: Function;
}
interface TitlePros {
    children?: ReactNode;
}
export declare function Title(props: TitlePros): JSX.Element;
export declare function Dialog(props: DialogProps): JSX.Element;
export declare namespace Dialog {
    var Title: typeof import("./dialog").Title;
    var Actions: typeof import("./dialog").Actions;
    var Content: import("styled-components").StyledComponent<"div", any, {}, never>;
    var Button: React.ForwardRefExoticComponent<Pick<import("../button").ButtonProps, "primary" | "big" | "style" | "color" | "target" | "href" | "children" | "onClick" | "disabled" | "forwardRef"> & React.RefAttributes<unknown>>;
}
interface ActionsProps {
    children: any[];
}
export declare function Actions(props: ActionsProps): JSX.Element;
export {};
