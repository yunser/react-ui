import { StyledProps } from "./styled-props";
import { IconType } from "react-icons/lib/cjs";
export interface Props extends StyledProps {
    text: string;
    type: "button" | "submit";
    icon?: IconType;
    onClick: () => void;
}
