import { ReactNode } from 'react';
interface ModalProps {
    children?: ReactNode;
    visible?: boolean;
    onClose?: Function;
}
interface TitlePros {
    children?: ReactNode;
}
export declare function Title(props: TitlePros): JSX.Element;
export declare function Modal(props: ModalProps): JSX.Element;
export {};
