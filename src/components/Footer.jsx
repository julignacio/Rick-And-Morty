import React from "react";
import { StyledFooter } from "./styled/StyledFooter.jsx";

export default function Footer() {
  return (
    <StyledFooter className="footer">
      <p className="footerContent">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <h4 className="footerContent">
        {" "}
        {"<>"} by <span className="developed">Julian Ramirez</span> &{" "}
        <span className="developed">Santiago Molina</span> 2021{" "}
      </h4>
    </StyledFooter>
  );
}
