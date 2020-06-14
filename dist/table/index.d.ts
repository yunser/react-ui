import { ReactNode } from 'react';
interface Column {
    title: string;
    dataKey: string;
    key?: string;
}
interface TableProps {
    children?: ReactNode;
    columns?: Column[];
    data?: any[];
}
export declare function Table(props: TableProps): JSX.Element;
export {};
