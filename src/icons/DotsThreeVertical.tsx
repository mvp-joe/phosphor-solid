/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext, IconProps } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="128" cy="64" r="16"/>
  <circle cx="128" cy="128" r="16"/>
  <circle cx="128" cy="192" r="16"/>
        </>
      )
    case "duotone":
      return (
        <>
          <circle cx="128" cy="128" r="12"/>
  <circle cx="128" cy="64" r="12"/>
  <circle cx="128" cy="192" r="12"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,76a12,12,0,1,0-12-12A12,12,0,0,0,128,76Zm0,104a12,12,0,1,0,12,12A12,12,0,0,0,128,180Z"/>
        </>
      )
    case "light":
      return (
        <>
          <circle cx="128" cy="64" r="10"/>
  <circle cx="128" cy="128" r="10"/>
  <circle cx="128" cy="192" r="10"/>
        </>
      )
    case "thin":
      return (
        <>
          <circle cx="128" cy="64" r="8"/>
  <circle cx="128" cy="128" r="8"/>
  <circle cx="128" cy="192" r="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <circle cx="128" cy="128" r="12"/>
  <circle cx="128" cy="64" r="12"/>
  <circle cx="128" cy="192" r="12"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const DotsThreeVertical = (props: IconProps, ref: any)  => {
  const { color, size, weight, mirrored, children, ...restProps } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...restContext
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      //transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...restContext}
      {...restProps}
    >
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
};


export default DotsThreeVertical;
