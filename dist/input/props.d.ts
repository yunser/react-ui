/// <reference types="react" />
import { IconType } from "react-icons/lib/cjs";
export declare type InputType = "text" | "password" | "number";
export declare type InputValidationState = "none" | "valid" | "invalid";
export declare type InputState = "normal" | "disabled" | "loading";
export interface Props {
    className?: string;
    color?: string;
    label?: string;
    type: InputType;
    state: InputState;
    validationState: InputValidationState;
    icon?: IconType;
    message?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}
