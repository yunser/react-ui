/// <reference types="react" />
interface Props {
    accept?: string;
    text?: string;
    shouldShowPreview?: boolean;
    isLoading?: boolean;
    onDrop?: (file: File) => void;
    file?: UploadedFile;
    className?: string;
}
export interface UploadedFile {
    name: string;
    url: string;
}
declare const Upload: ({ accept, text, shouldShowPreview, isLoading, onDrop, className, file }: Props) => JSX.Element;
export { Upload };
