import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Bienvenue sur <span style={{ color: "#f39c12" }}>Tradition Marocaine</span></h1>
      <p>Choisissez votre rôle pour continuer :</p>
      <div>
        <Link to="/user">Utilisateur</Link>
        <Link to="/admin-login">Administrateur</Link>
      </div>
    </div>
  );
}

export default Home;
