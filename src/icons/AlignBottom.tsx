/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext, IconProps } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="216.00488" y1="216.00586" x2="40.00488" y2="216.00586" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="122" y="98" width="104" height="52" rx="8" transform="translate(50 298) rotate(-90)" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="32" width="52" height="144" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="116" y="100" width="112" height="56" rx="8" transform="translate(44 300) rotate(-90)" opacity="0.2"/>
  <rect x="56" y="32" width="56" height="152" rx="8" opacity="0.2"/>
  <line x1="216.00488" y1="216.00586" x2="40.00488" y2="216.00586" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="116" y="100" width="112" height="56" rx="8" transform="translate(44 300) rotate(-90)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="32" width="56" height="152" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M224.00488,216.00586a8.00008,8.00008,0,0,1-8,8h-176a8,8,0,1,1,0-16h176A8.00008,8.00008,0,0,1,224.00488,216.00586ZM152,192h40a16.01833,16.01833,0,0,0,16-16V80a16.01833,16.01833,0,0,0-16-16H152a16.01833,16.01833,0,0,0-16,16v96A16.01833,16.01833,0,0,0,152,192Zm-88,0h40a16.01833,16.01833,0,0,0,16-16V40a16.01833,16.01833,0,0,0-16-16H64A16.01833,16.01833,0,0,0,48,40V176A16.01833,16.01833,0,0,0,64,192Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="216.00488" y1="216.00586" x2="40.00488" y2="216.00586" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="116" y="100" width="112" height="56" rx="8" transform="translate(44 300) rotate(-90)" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="32" width="56" height="152" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="216.00488" y1="216.00586" x2="40.00488" y2="216.00586" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="116" y="100" width="112" height="56" rx="8" transform="translate(44 300) rotate(-90)" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="32" width="56" height="152" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="216.00488" y1="216.00586" x2="40.00488" y2="216.00586" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="116" y="100" width="112" height="56" rx="8" transform="translate(44 300) rotate(-90)" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="56" y="32" width="56" height="152" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const AlignBottom = (props: IconProps, ref: any)  => {
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


export default AlignBottom;
