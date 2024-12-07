import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Identifiants fixes
    const correctUsername = "Aymane";
    const correctPassword = "Aymane1234";

    const handleLogin = () => {
        if (username === correctUsername && password === correctPassword) {
            alert("Connexion réussie !");
            navigate("/admin"); // Rediriger vers l'interface admin
        } else {
            alert("Nom d'utilisateur ou mot de passe incorrect.");
        }
    };

    return (
        <div style={styles.container}>
            <h1>Connexion Administrateur</h1>
            <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleLogin} style={styles.button}>
                Se connecter
            </button>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "400px",
        margin: "100px auto",
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "1px solid #ddd",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default AdminLogin;
