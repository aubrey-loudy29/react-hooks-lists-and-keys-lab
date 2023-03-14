import React from "react";
import user from "../data/user"

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a href="#home" key={user.city}>home</a>
      <a href="#about" key={user.bio}>about</a>
      <a href="#projects" key={user.projects}>projects</a>
    </nav>
  )
}

export default NavBar;
