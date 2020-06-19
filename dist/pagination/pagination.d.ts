/// <reference types="react" />
interface PaginationProps {
    page?: number;
    totalPage?: number;
    onChange?: (page: number) => void;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
export {};
