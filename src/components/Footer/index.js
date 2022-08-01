import React from "react";
import { Root } from "./Footer.style";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export default function Footer() {
  return (
    <Root>
      Like it? Buy it! &nbsp;
      <ThumbUpOffAltIcon />{" "}
      &nbsp;&nbsp;designed by GH
    </Root>
  );
}
