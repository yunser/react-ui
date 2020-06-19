import { ReactNode } from 'react';
interface DrawerProps {
    children?: ReactNode;
    visible?: boolean;
    onClose?: Function;
    placement?: string;
}
export declare function Drawer(props: DrawerProps): JSX.Element;
export {};
