import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "salmaibaadm@gmail.com" && password === "salma123") {
            navigate("/admin");
        } else {
            alert("Nom d'utilisateur ou mot de passe incorrect.");
        }
    };

    return (
        <div style={styles.container}>
            <h1>Connexion Admin</h1>
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
            <button onClick={handleLogin} style={styles.button}>Connexion</button>
        </div>
    );
};

const styles = {
    container: {
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
    },
    input: {
        display: "block",
        width: "100%",
        padding: "10px",
        margin: "10px 0",
    },
    button: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
    },
};

export default AdminLogin;
