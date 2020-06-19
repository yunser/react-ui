/// <reference types="react" />
interface HexColor {
    hex: string;
    opacity: number;
}
interface ColorPickerProps {
    value?: HexColor;
    onChange?: (value: HexColor) => void;
}
export declare function ColorPicker(props: ColorPickerProps): JSX.Element;
export {};
