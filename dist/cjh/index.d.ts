import * as React from "react";
import { IconType } from "react-icons/lib/cjs";
interface Props {
    className?: string;
    href?: string;
    onClick?: () => void;
    openInNewTab?: boolean;
    ariaLabel: string;
    icon?: IconType;
    text?: string;
    IconSizeInPx?: number;
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const Link: ({ href, text, ariaLabel, icon: Icon, IconSizeInPx, onClick, disabled, openInNewTab, children, className }: Props) => JSX.Element;
export { Link };
