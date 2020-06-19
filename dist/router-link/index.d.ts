/// <reference types="react" />
export interface LinkProps {
    className?: string;
    to?: string;
    href?: string;
    target?: string;
    children?: string | JSX.Element | JSX.Element[];
}
export declare function Link(props: LinkProps): JSX.Element;
