import { ReactNode } from 'react';
interface ToolBarProps {
    className?: string;
    primary?: boolean;
    children?: ReactNode;
    color?: string;
    big?: boolean;
}
export declare function ToolBar(props: ToolBarProps): JSX.Element;
export {};
