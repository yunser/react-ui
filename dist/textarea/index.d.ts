/// <reference types="react" />
import { Props } from "./props";
declare const TextArea: {
    ({ className, label, color, state, validationState, message, textAreaProps, labelProps }: Props): JSX.Element;
    defaultProps: {
        state: string;
        validationState: string;
    };
};
export { TextArea };
export declare type TextAreaProps = Props;
