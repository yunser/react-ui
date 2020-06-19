/// <reference types="react" />
interface TimePickerProps {
    format?: string;
    value?: Date;
    onChange?: (value: Date) => void;
}
export declare function TimePicker(props: TimePickerProps): JSX.Element;
export {};
