/// <reference types="react" />
export interface InputProps {
    className?: string;
    defaultValue?: string;
    placeholder?: string;
    type?: string;
    value: string | number;
    onChange?: (value: string) => void;
}
export interface TextInputProps extends InputProps {
}
export declare function Input(props: InputProps): JSX.Element;
export interface NumberInputProps {
    className?: string;
    defaultValue?: string;
    placeholder?: string;
    type?: string;
    value: string | number;
    onChange?: (value: number | undefined) => void;
}
export declare function NumberInput(props: NumberInputProps): JSX.Element;
export declare const TextInput: typeof Input;
