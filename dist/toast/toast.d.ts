import { ReactNode } from 'react';
interface ToastProps {
    type?: string;
    children?: ReactNode;
}
interface ToastsProps {
    ref?: any;
    children?: ReactNode;
    notices?: ReactNode[];
}
export declare function Toasts(props: ToastsProps): JSX.Element;
export declare function Toast(props: ToastProps): JSX.Element;
export declare namespace Toast {
    var info: (text: string) => void;
    var success: (text: string) => void;
    var error: (text: string) => void;
}
export {};
