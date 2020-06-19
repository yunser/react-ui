import { ReactNode } from "react";
interface PageProps {
    children?: ReactNode;
}
export declare function Page(props: PageProps): JSX.Element;
interface SimplePageProps {
    title: string;
    children?: ReactNode;
    action?: ReactNode;
    side?: ReactNode;
}
export declare function SimplePage(props: SimplePageProps): JSX.Element;
export {};
