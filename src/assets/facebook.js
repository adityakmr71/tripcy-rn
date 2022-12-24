import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const FacebookIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M18 9a9 9 0 0 0-9-9C4.028 0 0 4.028 0 9a9 9 0 0 0 7.594 8.89v-6.288H5.308V9.001h2.286V7.017c0-2.255 1.341-3.5 3.398-3.5.985 0 2.016.175 2.016.175v2.214H11.87c-1.116 0-1.465.695-1.465 1.407V9h2.496l-.401 2.602h-2.095v6.287c4.3-.675 7.594-4.399 7.594-8.89V9Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FacebookIcon;
