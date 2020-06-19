/// <reference types="react" />
interface ButtonProps {
    primary?: boolean;
    children?: string | JSX.Element;
    color?: string;
    big?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
export declare function Checkbox(props: ButtonProps): JSX.Element;
export {};
