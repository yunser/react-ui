/// <reference types="react" />
export interface LinkProps {
    to?: string;
    href?: string;
    target?: string;
    children?: string | JSX.Element | JSX.Element[];
}
export declare function Link(props: LinkProps): JSX.Element;
