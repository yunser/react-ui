/// <reference types="react" />
interface Props {
    className?: string;
    onClick?: () => void;
    children?: (JSX.Element | undefined)[] | JSX.Element;
}
declare const Panel: (props: Props) => JSX.Element;
export { Panel };
export declare type PanelProps = Props;
