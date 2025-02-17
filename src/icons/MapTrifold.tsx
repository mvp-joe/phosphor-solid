/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext, IconProps } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline points="96 184 32 200 32 56 96 40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="160 72 224 56 224 200 160 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polygon points="160 216 96 184 96 40 160 72 160 216" opacity="0.2"/>
  <polyline points="96 184 32 200 32 56 96 40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 72 224 56 224 200 160 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M228.9226,49.69434a7.99952,7.99952,0,0,0-6.86328-1.45557L160.93066,63.521,99.57788,32.84448c-.01758-.00879-.03613-.01416-.054-.0227a8.0283,8.0283,0,0,0-.86059-.363c-.05152-.01831-.10425-.03125-.156-.04858q-.36695-.12121-.7456-.207c-.082-.01855-.16407-.03515-.24659-.051q-.35778-.06921-.72338-.105c-.06934-.00708-.13843-.01709-.208-.02222a7.93012,7.93012,0,0,0-.94019-.01684l-.02392.00219a7.97484,7.97484,0,0,0-.8833.09571c-.1001.01611-.19874.03857-.29834.05859-.12623.0249-.25245.04273-.37867.07422l-64,16A7.99985,7.99985,0,0,0,23.99975,56V200a8.00045,8.00045,0,0,0,9.94043,7.76123L95.06909,192.479l61.35254,30.67627c.03637.01807.0747.03.11133.04761q.32482.15673.66308.28442c.04175.01563.08277.0337.125.04883a7.95445,7.95445,0,0,0,.81494.24146c.04273.01025.08545.01782.12818.02734q.36034.0802.72925.12671c.05078.00659.10131.01392.15234.01929a7.29318,7.29318,0,0,0,1.89233-.02222c.11182-.01465.22144-.04248.33277-.06177.18994-.0332.37939-.05835.56933-.10571l64-16A8,8,0,0,0,231.99975,200V56A7.99871,7.99871,0,0,0,228.9226,49.69434ZM151.99975,203.05566l-48-24V52.94434l48,24Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polyline points="96 184 32 200 32 56 96 40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="160 72 224 56 224 200 160 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polyline points="96 184 32 200 32 56 96 40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="160 72 224 56 224 200 160 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polyline points="96 184 32 200 32 56 96 40" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 72 224 56 224 200 160 216" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const MapTrifold = (props: IconProps, ref: any)  => {
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


export default MapTrifold;
