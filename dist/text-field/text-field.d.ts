/// <reference types="react" />
import { TextInputProps, NumberInputProps } from '../input';
interface TextFieldProps extends TextInputProps {
    label: string;
}
interface NumberFieldProps extends NumberInputProps {
    label: string;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
export declare function NumberField(props: NumberFieldProps): JSX.Element;
export {};
