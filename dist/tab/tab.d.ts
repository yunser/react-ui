import { ReactNode } from 'react';
interface ItemProps {
    children: ReactNode;
    style?: any;
    value: string;
    onClick?: any;
    selected?: boolean;
}
interface TabProps {
    value?: string;
    onChange?: (value: string) => void;
    children: ReactNode;
}
export declare function Tab(props: TabProps): JSX.Element;
export declare namespace Tab {
    var Item: (props: ItemProps) => JSX.Element;
}
export {};
