/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <path d="M172,128h52a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H84" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="80 72 128 24 176 72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="188" cy="168" r="16"/>
        </>);
        case "duotone":
            return (<>
          <rect x="24" y="128" width="208" height="80" rx="8" opacity="0.2"/>
  <path d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="80 72 128 24 176 72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="188" cy="168" r="12"/>
        </>);
        case "fill":
            return (<>
          <g>
    <path d="M85.65674,77.65723,120,43.31348V128a8,8,0,0,0,16,0V43.31348l34.34326,34.34375a8.00018,8.00018,0,0,0,11.31348-11.31446l-48-48c-.023-.02246-.04785-.0415-.0708-.064-.165-.16113-.33545-.31787-.51416-.46485-.09619-.07861-.19776-.14746-.29639-.22119-.11035-.08252-.21826-.168-.333-.24511-.11377-.07618-.23242-.14209-.34912-.21192-.10742-.06445-.2124-.13183-.32324-.19092-.11572-.062-.23535-.11425-.35352-.17041-.11865-.05615-.23584-.11523-.35742-.166-.11181-.0459-.22558-.083-.33887-.12354-.1333-.04834-.26513-.09961-.40185-.14062-.10889-.0332-.21973-.05664-.33008-.085-.14258-.03662-.28369-.07617-.42969-.105-.12109-.02393-.24365-.0376-.36523-.05567-.13623-.0205-.271-.04541-.40918-.05908-.20215-.01953-.40479-.02637-.60742-.03076C128.11768,16.00781,128.05957,16,128,16s-.11768.00781-.17676.00879c-.20263.00439-.40527.01123-.60742.03076-.13818.01367-.27295.03858-.40918.05908-.12158.01807-.24414.03174-.36523.05567-.146.02881-.28711.06836-.42969.105-.11035.02832-.22119.05176-.33008.085-.13672.041-.26855.09228-.40185.14062-.11329.04053-.22706.07764-.33887.12354-.12158.05078-.23877.10986-.35742.166-.11817.05616-.2378.1084-.35352.17041-.11084.05909-.21582.12647-.32324.19092-.1167.06983-.23535.13574-.34912.21192-.11475.07714-.22266.16259-.333.24511-.09863.07373-.2002.14258-.29639.22119-.17578.14454-.34277.29834-.50537.457-.02588.0249-.0542.04638-.07959.07177l-48,48A8.00018,8.00018,0,0,0,85.65674,77.65723Z"/>
    <path d="M224,120H152v8a24,24,0,0,1-48,0v-8H32a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V136A16.01833,16.01833,0,0,0,224,120Zm-35.99951,60a12,12,0,1,1,12-12A12,12,0,0,1,188.00049,180Z"/>
  </g>
        </>);
        case "light":
            return (<>
          <path d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="80 72 128 24 176 72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="188" cy="168" r="10"/>
        </>);
        case "thin":
            return (<>
          <path d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="80 72 128 24 176 72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="188" cy="168" r="8"/>
        </>);
        case "regular":
            return (<>
          <path d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="80 72 128 24 176 72" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="188" cy="168" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const Upload = (props, ref) => {
    const { color, size, weight, mirrored, children, ...restProps } = props;
    const { color: contextColor, size: contextSize, weight: contextWeight, mirrored: contextMirrored, ...restContext } = useContext(IconContext);
    return (<svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={size ?? contextSize} height={size ?? contextSize} fill={color ?? contextColor} viewBox="0 0 256 256" 
    //transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
    {...restContext} {...restProps}>
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>);
};
export default Upload;
