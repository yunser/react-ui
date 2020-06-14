/// <reference types="react" />
interface Props {
    vertical?: boolean;
    children?: (JSX.Element | undefined)[] | JSX.Element;
    className?: string;
}
declare const ActionBar: ({ vertical, children, className }: Props) => JSX.Element;
export { ActionBar };
