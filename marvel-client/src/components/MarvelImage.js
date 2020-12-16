import React from "react";

import useLoadImage from "../hooks/useLoadImage";

const Image = (sizeSm, alt) => {
  const [src, { blur }] = useLoadImage(sizeSm.sizeSm, sizeSm.sizeLg);
  //   console.log(sizeSm.sizeSm, sizeSm.sizeLg, sizeSm.alt);
  //   console.log(sizeSm.sizeSm, sizeSm.sizeLg);
  //   console.log(src);
  console.log("blur", blur);
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: 400,
        filter: blur ? "blur(10px)" : "none",
        transition: blur ? "none" : "filter 0.3s ease-out",
      }}
    />
  );
};

export default Image;
