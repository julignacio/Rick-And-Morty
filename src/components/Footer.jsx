import React from "react";
import { StyledFooter } from "./styled/StyledFooter.jsx";

export default function Footer() {
  return (
    <StyledFooter className="footer">
      <p className="footerContent">
        {" "}
        APP created to explain how to use React and a external API to Henry
        Students.{" "}
      </p>
      <h4 className="footerContent">
        {"<>"} by{" "}
        <span className="developed">
          <a href="https://www.linkedin.com/in/julignacio/">Julian Ramirez</a>
        </span>{" "}
        {" & "}
        <span className="developed">Santiago Molina </span> 2021
      </h4>
      <div>
        <h4 className="credits">
          Api: <a href="https://rickandmortyapi.com/">Rick and Morty API</a>
        </h4>
      </div>
    </StyledFooter>
  );
}
