// src/components/AdminDashboard.js
import React, { useState } from "react";

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        name: "",
        category: "",
        price: "",
    });

    // Ajouter un produit
    const addProduct = () => {
        if (form.name && form.category && form.price) {
            setProducts([
                ...products,
                { id: Date.now(), name: form.name, category: form.category, price: parseFloat(form.price) },
            ]);
            setForm({ name: "", category: "", price: "" });
        }
    };

    // Supprimer un produit
    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div>
            <h2>Tableau de bord administrateur</h2>

            {/* Formulaire d'ajout */}
            <div>
                <input
                    type="text"
                    placeholder="Nom du produit"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ marginRight: "10px" }}
                />
                <input
                    type="text"
                    placeholder="Catégorie"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    style={{ marginRight: "10px" }}
                />
                <input
                    type="number"
                    placeholder="Prix"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
                <button onClick={addProduct} style={{ marginLeft: "10px" }}>Ajouter</button>
            </div>

            {/* Liste des produits */}
            <h3>Produits existants</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id} style={{ marginBottom: "10px" }}>
                        {product.name} - {product.category} - {product.price} €
                        <button
                            onClick={() => deleteProduct(product.id)}
                            style={{
                                marginLeft: "10px",
                                color: "red",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
