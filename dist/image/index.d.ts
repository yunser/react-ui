/// <reference types="react" />
interface Props {
    src?: string;
    alt: string;
    className?: string;
}
declare const Image: ({ src, alt, className }: Props) => JSX.Element;
export { Image };
export declare type ImageProps = Props;
