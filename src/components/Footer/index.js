import React from "react";
import { Root, Img } from "./Footer.style";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export default function Footer() {
  return (
    <Root>
      <Img
        src="https://cdn-icons-png.flaticon.com/512/39/39196.png"
        alt="visa"
      ></Img>
      <Img
        src="https://cdn-icons-png.flaticon.com/512/349/349237.png"
        alt="JCB"
      ></Img>
      <Img
        src="https://cdn-icons-png.flaticon.com/512/349/349247.png"
        alt="paypal"
      ></Img>
      <Img
        src="https://cdn-icons.flaticon.com/png/512/1548/premium/1548844.png?token=exp=1659671804~hmac=6758e3038240882fe24fd400d6175ede"
        alt="AMEX"
      ></Img>
      <span>Like it? &nbsp;</span>
      <ThumbUpOffAltIcon />
      &nbsp; &nbsp;
      <Img
        src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
        alt="facebook"
      ></Img>
      <Img
        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
        alt="instagram"
      ></Img>
      <Img
        src="https://cdn-icons-png.flaticon.com/512/1409/1409937.png"
        alt="twitter"
      ></Img>
      <Img
        src="https://cdn-icons-png.flaticon.com/128/5968/5968812.png"
        alt="ticktok"
      ></Img>
      &nbsp;&nbsp;<button>Contact Us</button> &nbsp;&nbsp;&nbsp;&nbsp;
    </Root>
  );
}
