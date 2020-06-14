import { ReactNode } from 'react';
interface ConfigProviderProps {
    children: ReactNode;
}
export declare function ConfigProvider(props: ConfigProviderProps): JSX.Element;
export interface TextProps {
    id: string;
}
export declare function Text(props: TextProps): JSX.Element;
export {};
