import { ThemeProps, DefaultTheme } from "styled-components";
import { ButtonEmphasis, ButtonShape } from "./styled-props";
export declare const buttonBottomColor: (color: string) => any;
export declare const hoverColor: (color: string) => any;
export declare const activeColor: (color: string) => any;
export declare const darkerActiveColor: (color: string) => any;
export declare const contentColor: (props: ThemeProps<DefaultTheme> & {
    emphasis: ButtonEmphasis;
    type: ButtonShape;
}) => any;
export declare const emphasisColor: (props: ThemeProps<DefaultTheme> & {
    emphasis: ButtonEmphasis;
}) => any;
