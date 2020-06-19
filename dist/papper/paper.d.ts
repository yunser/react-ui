import { ReactNode, Attributes, CSSProperties } from 'react';
interface PaperProps {
    children?: ReactNode;
    level?: number;
    style?: CSSProperties & Attributes;
}
export declare function Paper(props: PaperProps): JSX.Element;
export {};
