/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext, IconProps } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M161.93948,216.0039A44.00107,44.00107,0,0,1,84,188c0-41.49014-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M178.33575,160.00017A20.00334,20.00334,0,0,1,140,152c0-24,28-24,28-48a40,40,0,0,0-80,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M161.93951,216.00391A44.00109,44.00109,0,0,1,84,188c0-41.49014-36-28-36-84a80,80,0,0,1,160,0C208,144,208.97171,168.97171,161.93951,216.00391Z" opacity="0.2"/>
  <path d="M180,152a20,20,0,0,1-40,0c0-24,28-24,28-48a40,40,0,0,0-80,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M161.93948,216.0039A44.00107,44.00107,0,0,1,84,188c0-41.49014-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M188,152a28,28,0,0,1-56,0c0-15.67969,9.31152-23.66113,16.79346-30.07422C155.95068,115.791,160,111.93457,160,104a32,32,0,0,0-64,0,8,8,0,0,1-16,0,48,48,0,0,1,96,0c0,15.67969-9.31152,23.66113-16.79346,30.07422C152.04932,140.209,148,144.06543,148,152a12,12,0,0,0,24,0,8,8,0,0,1,16,0ZM128,16a88.09957,88.09957,0,0,0-88,88c0,33.49512,12.45557,45.50488,22.46387,55.15527C70.32227,166.73242,76,172.207,76,188a52.00105,52.00105,0,0,0,92.10742,33.09863,8,8,0,1,0-12.33594-10.18945A36.001,36.001,0,0,1,92,188c0-22.5918-9.7915-32.0332-18.43018-40.36328C64.53418,138.9248,56,130.69629,56,104a72,72,0,0,1,144,0,8,8,0,0,0,16,0A88.09957,88.09957,0,0,0,128,16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M180,152a20,20,0,0,1-40,0c0-24,28-24,28-48a40,40,0,0,0-80,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M161.93948,216.0039A44.00107,44.00107,0,0,1,84,188c0-41.49014-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M180,152a20,20,0,0,1-40,0c0-24,28-24,28-48a40,40,0,0,0-80,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M161.93948,216.0039A44.00107,44.00107,0,0,1,84,188c0-41.49014-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M180,152a20,20,0,0,1-40,0c0-24,28-24,28-48a40,40,0,0,0-80,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M161.93948,216.0039A44.00107,44.00107,0,0,1,84,188c0-41.49014-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Ear = (props: IconProps, ref: any)  => {
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


export default Ear;
