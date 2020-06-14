export declare type ButtonEmphasis = "primary" | "secondary" | "valid" | "invalid";
export declare type ButtonState = "none" | "disabled" | "loading";
export declare type ButtonShape = "standard" | "basic";
export interface StyledProps {
    className?: string;
    emphasis: ButtonEmphasis;
    state: ButtonState;
    shape: ButtonShape;
    fluid: boolean;
}
