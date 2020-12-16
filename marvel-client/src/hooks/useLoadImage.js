import { useState, useEffect } from "react";

const useLoadImage = (sizeSm, sizeLg) => {
  const [src, setSrc] = useState(sizeLg);

  useEffect(() => {
    setSrc(sizeSm);

    const img = new Image();
    img.src = sizeLg;

    img.onLoad = () => {
      setSrc(sizeLg);
      console.log("loaded");
    };
  }, [sizeSm, sizeLg]);

  return [src, { blur: src === sizeSm }];
};

export default useLoadImage;
