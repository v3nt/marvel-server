import React from "react";
import Image from "./Image";

const covers = [
  "bk3_wxpqob",
  "bk1_ycxssp",
  "bk7_np4asb",
  "bk7_np4asb",
  "bk_i8kbvn",
  "bk5_vuxjc3",
  "bk4_todh2l",
  "bk2_ipgbmq",
];

const sizes = [
  "t_media_lib_small",
  "t_media_lib_medium",
  "t_media_lib_large",
  "",
];

const Landing = () => {
  const rand = Math.floor(Math.random() * Math.floor(covers.length));
  const randFile = `${covers[rand]}.jpg`;
  console.log("rand", rand, `${covers[rand]}.jpg`);
  return (
    <div>
      <div className="cover-container">
        <Image
          sizeSm={
            "https://res.cloudinary.com/jynk/image/upload/t_media_lib_small/v1608060767/" +
            randFile
          }
          sizeLg={{
            "https://res.cloudinary.com/jynk/image/upload/t_media_lib_large/v1608060767/" +
            randFile
          }}
        />
        <img
          className="img-fluid"
          data-src-small={
            "https://res.cloudinary.com/jynk/image/upload/t_media_lib_small/v1608060767/" +
            randFile
          }
          data-src-med={
            "https://res.cloudinary.com/jynk/image/upload/t_media_lib_medium/v1608060767/" +
            randFile
          }
          data-src-large={
            "https://res.cloudinary.com/jynk/image/upload/t_media_lib_large/v1608060767/" +
            randFile
          }
          data-src-fullsize={
            "https://res.cloudinary.com/jynk/image/upload/v1608060767/" +
            randFile
          }
          src={
            "https://res.cloudinary.com/jynk/image/upload/t_media_lib_large/v1608060767/" +
            randFile
          }
          alt="marvel background"
        />
      </div>
      <div className="container"></div>
    </div>
  );
};

export default Landing;
