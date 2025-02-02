import React from "react";

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

const Landing = () => {
  const rand = Math.floor(Math.random() * Math.floor(covers.length));
  const randFile = `${covers[rand]}.jpg`;

  return (
    <div className="cover-container">
      <img
        className="cover-image"
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
          "https://res.cloudinary.com/jynk/image/upload/v1608060767/" + randFile
        }
        src={
          "https://res.cloudinary.com/jynk/image/upload/t_media_lib_large/v1608060767/" +
          randFile
        }
        alt="marvel background"
      />
    </div>
  );
};

export default Landing;
