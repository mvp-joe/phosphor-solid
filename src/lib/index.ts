import { createContext, JSX, Component } from "solid-js";

export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  color?: string;
  size?: string | number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  mirrored?: boolean;
  children: any;
}

export type Icon = Component<IconProps>;

export type IconContextProps = Required<
  Pick<IconProps, "color" | "size" | "weight" | "mirrored">
> &
JSX.SvgSVGAttributes<SVGSVGElement>;

export const IconContext = createContext<IconContextProps>({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
});
