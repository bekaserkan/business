import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.002 4.257A2 2 0 0 0 8.146 3H5.395A1.895 1.895 0 0 0 3.5 4.895C3.5 13.789 10.71 21 19.605 21a1.895 1.895 0 0 0 1.895-1.895v-2.751a2 2 0 0 0-1.257-1.857l-2.636-1.054a2 2 0 0 0-2.023.32l-.68.568a2.001 2.001 0 0 1-2.696-.122l-1.916-1.918a2 2 0 0 1-.123-2.694l.567-.68a2 2 0 0 0 .322-2.024l-1.056-2.636Z"
    />
  </Svg>
);
export default SvgComponent;
