/// <reference types="react" />
import { InputProps } from "../input";
export interface AutocompleteItem {
    value: string;
    data: string;
}
interface Props extends InputProps {
    items: AutocompleteItem[];
    isLoading: boolean;
    onSelect: (item: AutocompleteItem) => void;
    onInputChange: (value: string) => void;
    initialSelectedItem?: AutocompleteItem;
    className?: string;
}
declare const Autocomplete: {
    ({ items, onSelect, onInputChange, isLoading, initialSelectedItem, className, inputProps, ...restOfProps }: Props): JSX.Element;
    defaultProps: {
        type: string;
        state: string;
        validationState: string;
        isLoading: boolean;
        items: never[];
        onSelect: () => void;
        onInputChange: () => void;
    };
};
export { Autocomplete };
export declare type AutocompleteProps = Props;
