import React from "react";

const Header = () => {
  return (
    <div>
      <nav>
        <a href="#">Théo</a>
        <div className="nav">
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">À propos</a>
            </li>
            <li className="active">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
