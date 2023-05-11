import React from "react";

const Header = () => {
  return (
    <div>
      <nav>
        <a href="#a">Théo</a>
        <div className="nav">
          <ul>
            <li>
              <a href="#e">Accueil</a>
            </li>
            <li>
              <a href="#f">À propos</a>
            </li>
            <li className="active">
              <a href="#a">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
