import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNav } from "./styled/StyledNav.jsx";
import SearchBar from "./SearchBar.jsx";
import { StyledModal as Modal } from "./styled/StyledModal.jsx";
import Card from "./Card.jsx";
import logo from "../img/rickMorty.png";

export default function Nav({ pj, onSearch, changeMode }) {
  function dropdownFunction(e) {
    let el = document.querySelector(".dropdown-content");
    if (el.style.display === "flex") {
      el.style.display = "none";
    } else {
      el.style.display = "flex";
    }
    e.target.classList.toggle("activo");
  }

  return (
    <StyledNav className="nav">
      <NavLink exact to="/" className="logo">
        <img src={logo} alt="Logo Rick y Morty" />
      </NavLink>
      <div className="navDiv">
        <NavLink to="/locations" activeClassName="selected" className="navLink">
          <span> Locations </span>
        </NavLink>
        <NavLink
          to="/characters"
          activeClassName="selected"
          className="navLink"
        >
          <span> Characters </span>
        </NavLink>
        <NavLink to="/episodes" activeClassName="selected" className="navLink">
          <span> Episodes </span>
        </NavLink>
      </div>
      <div className="divSearch">
        <SearchBar onSearch={onSearch} />
      </div>
      <label className="switchMode">
        <input type="checkbox" onClick={changeMode} />
        <span className="slider"></span>
      </label>

      <Modal
        id="modalBusqueda"
        onClick={() =>
          (document.querySelector("#modalBusqueda").style.display = "none")
        }
      >
        <div className="cards">
          {pj.map((c) => {
            return (
              <Card
                key={c.id}
                id={c.id}
                name={c.name}
                status={c.status}
                specie={c.species}
                episodes={c.episodes}
                location={c.location}
                className="modalCard"
              />
            );
          })}
        </div>
      </Modal>
      <div className="dropdown">
        <button onClick={dropdownFunction} className="dropdownMenu">
          {" "}
          Menu{" "}
        </button>
        <div className="dropdown-content">
          <SearchBar onSearch={onSearch} />
          <NavLink
            to="/locations"
            activeClassName="selected"
            className="navLink"
          >
            <span> Locations </span>
          </NavLink>
          <NavLink
            to="/characters"
            activeClassName="selected"
            className="navLink"
          >
            <span> Characters </span>
          </NavLink>
          <NavLink
            to="/episodes"
            activeClassName="selected"
            className="navLink"
          >
            <span> Episodes </span>
          </NavLink>
        </div>
      </div>
    </StyledNav>
  );
}
