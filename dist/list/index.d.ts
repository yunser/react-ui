import { ReactNode } from 'react';
interface ListProps {
    children?: string | JSX.Element | JSX.Element[];
}
interface ListItemProps {
    children?: ReactNode;
    href?: string;
    to?: string;
    target?: string;
}
export declare function Item(props: ListItemProps): JSX.Element;
export declare function List(props: ListProps): JSX.Element;
export declare namespace List {
    var Item: typeof import(".").Item;
    var Title: import("styled-components").StyledComponent<"div", any, {}, never>;
    var Icon: import("styled-components").StyledComponent<typeof import("../icon").Icon, any, {}, never>;
}
export {};
