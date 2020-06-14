/// <reference types="react" />
import { Props } from "./props";
declare const Input: {
    ({ className, label, color, type, state, validationState, icon: Icon, message, inputProps, labelProps }: Props): JSX.Element;
    defaultProps: {
        type: string;
        state: string;
        validationState: string;
    };
};
export { Input };
export declare type InputProps = Props;
