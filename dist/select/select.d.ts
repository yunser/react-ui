import { ReactNode } from "react";
interface ItemProps {
    value?: string;
    onClick?: Function;
    children?: ReactNode;
    selected?: boolean;
    onChange?: (selected: boolean) => void;
}
interface SelectProps {
    value?: any;
    children?: ReactNode;
    onChange?: (value: any) => void;
}
export declare function Select(props: SelectProps): JSX.Element;
export declare namespace Select {
    var Item: (props: ItemProps) => JSX.Element;
}
export {};
