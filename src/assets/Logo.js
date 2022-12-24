import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

export const LogoVariant = {
  dark: "dark",
  default: "default",
};

const Logo = ({ variant }) => {
  const logoColor = {
    dark: {
      stop1: "#000000",
      stop2: "#000000",
      stop3: "#000000",
      stop4: "#000000",
      stop5: "#000000",
      stop6: "#000000",
    },
    default: {
      stop1: "#F24DD9",
      stop2: "#FC787A",
      stop3: "#30B9D6",
      stop4: "#2DDDAB",
      stop5: "#7D21FE",
      stop6: "#5610BA",
    },
  };
  return (
    <Svg width={41} height={33} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect
        x={19.792}
        y={29.355}
        width={30.605}
        height={7.448}
        rx={3.724}
        transform="rotate(-61.355 19.792 29.355)"
        fill="url(#a)"
      />
      <Rect
        x={7.526}
        y={29.564}
        width={33.237}
        height={7.448}
        rx={3.724}
        transform="rotate(-62.813 7.526 29.564)"
        fill="url(#b)"
      />
      <Path
        d="M6.2 19.747C4.277 17.401 0 11.715 0 8.521c0-3.875 3.167-7.016 7.073-7.016 3.905 0 7.074 3.141 7.074 7.016 0 3.194-4.31 8.88-6.2 11.226-.454.56-1.294.56-1.747 0Zm.873-8.887A2.35 2.35 0 0 0 9.431 8.52a2.35 2.35 0 0 0-2.358-2.339 2.35 2.35 0 0 0-2.357 2.34 2.35 2.35 0 0 0 2.357 2.338Z"
        fill="url(#c)"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={50.603}
          y1={32.832}
          x2={20.31}
          y2={32.992}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={logoColor[variant].stop1} />
          <Stop offset={1} stopColor={logoColor[variant].stop2} />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={40.684}
          y1={32.801}
          x2={8.621}
          y2={32.605}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={logoColor[variant].stop3} />
          <Stop offset={1} stopColor={logoColor[variant].stop4} />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={7.073}
          y1={1.505}
          x2={7.073}
          y2={20.166}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={logoColor[variant].stop5} />
          <Stop offset={1} stopColor={logoColor[variant].stop6} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

Logo.defaultProps = {
  variant: LogoVariant.default,
};

export default Logo;
