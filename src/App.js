import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import AdminLogin from "./pages/AdminLogin";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import initialProducts from "./products";

const App = () => {
    const [products, setProducts] = useState(initialProducts); // Tous les produits
    const [cart, setCart] = useState([]); // État du panier

    const addToCart = (product) => setCart([...cart, product]); // Ajouter au panier
    const removeFromCart = (id) => setCart(cart.filter((product) => product.id !== id)); // Retirer du panier

    return (
        <Router>
            <div>
                <nav style={styles.nav}>
                    <Link to="/" style={styles.link}>Accueil</Link>
                    <Link to="/user" style={styles.link}>Produits</Link>
                    <Link to="/cart" style={styles.link}>Panier ({cart.length})</Link>
                    <Link to="/admin-login" style={styles.link}>Admin</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<UserPage products={products} addToCart={addToCart} />} />
                    <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/admin" element={<AdminPage products={products} setProducts={setProducts} />} />
                </Routes>
            </div>
        </Router>
    );
};

const styles = {
    nav: {
        backgroundColor: "#2c3e50",
        padding: "10px",
        textAlign: "center",
    },
    link: {
        color: "white",
        margin: "0 10px",
        textDecoration: "none",
        fontWeight: "bold",
    },
};

export default App;
