/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <polyline points="80 152 32 104 80 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M224,200a96,96,0,0,0-96-96H32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>);
        case "duotone":
            return (<>
          <polyline points="80 152 32 104 80 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,200a96,96,0,0,0-96-96H32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        case "fill":
            return (<>
          <path d="M232,200a8,8,0,0,1-16,0,88.09957,88.09957,0,0,0-88-88H88v40a8.00053,8.00053,0,0,1-13.65723,5.65723l-48-48a8.00122,8.00122,0,0,1,0-11.31446l48-48A8.00065,8.00065,0,0,1,88,56V96h40A104.11791,104.11791,0,0,1,232,200Z"/>
        </>);
        case "light":
            return (<>
          <polyline points="80 152 32 104 80 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M224,200a96,96,0,0,0-96-96H32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>);
        case "thin":
            return (<>
          <polyline points="80 152 32 104 80 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M224,200a96,96,0,0,0-96-96H32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>);
        case "regular":
            return (<>
          <polyline points="80 152 32 104 80 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,200a96,96,0,0,0-96-96H32" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const ArrowBendUpLeft = (props, ref) => {
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
export default ArrowBendUpLeft;
