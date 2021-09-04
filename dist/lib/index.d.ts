import { JSX, Component } from "solid-js";
export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
    color?: string;
    size?: string | number;
    weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
    mirrored?: boolean;
    children?: any;
}
export declare type Icon = Component<IconProps>;
export declare type IconContextProps = Required<Pick<IconProps, "color" | "size" | "weight" | "mirrored">> & JSX.SvgSVGAttributes<SVGSVGElement>;
export declare const IconContext: import("solid-js").Context<IconContextProps>;
