import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfileTab = ({color}) => {
  return (
    <Svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.6667 1C6.14366 1 1.66666 5.477 1.66666 11C1.66666 16.523 6.14366 21 11.6667 21C17.1897 21 21.6667 16.523 21.6667 11C21.6667 5.477 17.1897 1 11.6667 1Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.93765 17.346C3.93765 17.346 6.16665 14.5 11.6667 14.5C17.1667 14.5 19.3967 17.346 19.3967 17.346"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.6667 11C12.4623 11 13.2254 10.6839 13.788 10.1213C14.3506 9.55871 14.6667 8.79565 14.6667 8C14.6667 7.20435 14.3506 6.44129 13.788 5.87868C13.2254 5.31607 12.4623 5 11.6667 5C10.871 5 10.1079 5.31607 9.54534 5.87868C8.98273 6.44129 8.66666 7.20435 8.66666 8C8.66666 8.79565 8.98273 9.55871 9.54534 10.1213C10.1079 10.6839 10.871 11 11.6667 11V11Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ProfileTab;
