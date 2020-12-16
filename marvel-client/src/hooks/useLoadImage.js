import React, { useState, useEffect } from "react";

const useLoadImage = (small, large) => {
  const [src, setSrc] = useState(small);

  useEffect(() => {
    setSrc(small);
    const img = new Image();
    img.src = large;

    img.onLoad = () => {
      setSrc(large);
    };
  }, [small, large]);
};

export default useLoadImage;
