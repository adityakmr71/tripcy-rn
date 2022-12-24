import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IconHome = ({ color }) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M5.833 25.666h16.334a2.333 2.333 0 0 0 2.333-2.333v-10.5a1.165 1.165 0 0 0-.338-.828L14.828 2.67a1.167 1.167 0 0 0-1.645 0L3.85 12.005a1.167 1.167 0 0 0-.35.828v10.5a2.333 2.333 0 0 0 2.333 2.333Zm5.834-2.333V17.5h4.666v5.833h-4.666ZM5.833 13.311 14 5.145l8.167 8.166v10.022h-3.5V17.5a2.333 2.333 0 0 0-2.334-2.334h-4.666A2.333 2.333 0 0 0 9.333 17.5v5.833h-3.5V13.311Z"
      fill={color}
    />
  </Svg>
);

export default IconHome;
