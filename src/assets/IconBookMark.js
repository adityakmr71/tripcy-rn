import * as React from "react";
import Svg, { Path } from "react-native-svg";

const IconBookMark = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.167 7.167v5.808L6 11.192l-4.167 1.783V2.167h5V.5h-5C.917.5.167 1.25.167 2.167V15.5L6 13l5.833 2.5V7.167h-1.666ZM13.5 3.833h-1.667V5.5h-1.666V3.833H8.5V2.167h1.667V.5h1.666v1.667H13.5v1.666Z"
      fill="#FF5353"
    />
  </Svg>
);

export default IconBookMark;
