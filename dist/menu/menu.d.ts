import { ReactNode } from 'react';
interface MenuProps {
    open?: boolean;
    onClose?: Function;
    anchorEl?: any;
    children?: ReactNode;
}
interface MenuItemProps {
    children?: ReactNode;
}
declare function MenuItem(props: MenuItemProps): JSX.Element;
export declare function Menu(props: MenuProps): JSX.Element;
export declare namespace Menu {
    var Item: typeof MenuItem;
}
export {};
