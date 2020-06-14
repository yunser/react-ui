import { ReactNode } from 'react';
interface DrawerProps {
    children?: ReactNode;
    open?: boolean;
    onClose?: Function;
}
export declare function Drawer(props: DrawerProps): JSX.Element;
export {};
