/* GENERATED FILE */
import { useContext } from "solid-js";
import { IconContext } from "../lib";
const renderPathFor = (weight, color) => {
    switch (weight) {
        case "bold":
            return (<>
          <rect x="24" y="72" width="208" height="112" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="180" cy="128" r="16"/>
        </>);
        case "duotone":
            return (<>
          <rect x="24" y="72" width="208" height="112" rx="8" opacity="0.2"/>
  <rect x="24" y="72" width="208" height="112" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="188" cy="128" r="12"/>
        </>);
        case "fill":
            return (<>
          <path d="M224,64H32A16.01833,16.01833,0,0,0,16,80v96a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,224,64Zm-35.99951,76a12,12,0,1,1,12-12A12,12,0,0,1,188.00049,140Z"/>
        </>);
        case "light":
            return (<>
          <rect x="24" y="72" width="208" height="112" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="188" cy="128" r="10"/>
        </>);
        case "thin":
            return (<>
          <rect x="24" y="72" width="208" height="112" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="188" cy="128" r="8"/>
        </>);
        case "regular":
            return (<>
          <rect x="24" y="72" width="208" height="112" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="188" cy="128" r="12"/>
        </>);
        default:
            console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
            return null;
    }
};
const HardDrive = (props, ref) => {
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
export default HardDrive;
