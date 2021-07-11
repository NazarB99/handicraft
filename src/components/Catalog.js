import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CatalogImage = ({color}) => {
  return (
    <Svg
      width="27"
      height="16"
      viewBox="0 0 27 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.11111 15.1111C7.11111 14.8754 7.20476 14.6493 7.37146 14.4826C7.53816 14.3159 7.76425 14.2222 8 14.2222H25.7778C26.0135 14.2222 26.2396 14.3159 26.4063 14.4826C26.573 14.6493 26.6667 14.8754 26.6667 15.1111C26.6667 15.3469 26.573 15.573 26.4063 15.7397C26.2396 15.9064 26.0135 16 25.7778 16H8C7.76425 16 7.53816 15.9064 7.37146 15.7397C7.20476 15.573 7.11111 15.3469 7.11111 15.1111ZM3.55556 8C3.55556 7.76425 3.64921 7.53816 3.81591 7.37146C3.9826 7.20476 4.2087 7.11111 4.44444 7.11111H22.2222C22.458 7.11111 22.6841 7.20476 22.8508 7.37146C23.0175 7.53816 23.1111 7.76425 23.1111 8C23.1111 8.23575 23.0175 8.46184 22.8508 8.62854C22.6841 8.79524 22.458 8.88889 22.2222 8.88889H4.44444C4.2087 8.88889 3.9826 8.79524 3.81591 8.62854C3.64921 8.46184 3.55556 8.23575 3.55556 8ZM0 0.888889C0 0.653141 0.0936505 0.427049 0.260349 0.26035C0.427048 0.0936507 0.653141 0 0.888889 0H18.6667C18.9024 0 19.1285 0.0936507 19.2952 0.26035C19.4619 0.427049 19.5556 0.653141 19.5556 0.888889C19.5556 1.12464 19.4619 1.35073 19.2952 1.51743C19.1285 1.68413 18.9024 1.77778 18.6667 1.77778H0.888889C0.653141 1.77778 0.427048 1.68413 0.260349 1.51743C0.0936505 1.35073 0 1.12464 0 0.888889Z"
        fill={color}
      />
    </Svg>
  );
};

export default CatalogImage;