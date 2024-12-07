import React, { useState } from "react";

const AdminPage = ({ products, setProducts }) => {
    const [form, setForm] = useState({
        id: null,
        name: "",
        category: "",
        price: "",
        image: "",
    });
    const [editMode, setEditMode] = useState(false); // Pour activer ou désactiver le mode édition

    // Ajouter un produit
    const addProduct = () => {
        if (form.name && form.category && form.price && form.image) {
            setProducts([
                ...products,
                {
                    id: Date.now(),
                    name: form.name,
                    category: form.category,
                    price: parseFloat(form.price),
                    image: form.image,
                },
            ]);
            resetForm(); // Réinitialiser le formulaire après ajout
        } else {
            alert("Veuillez remplir tous les champs pour ajouter un produit.");
        }
    };

    // Modifier un produit
    const updateProduct = () => {
        if (form.name && form.category && form.price && form.image) {
            setProducts(
                products.map((product) =>
                    product.id === form.id
                        ? {
                              ...product,
                              name: form.name,
                              category: form.category,
                              price: parseFloat(form.price),
                              image: form.image,
                          }
                        : product
                )
            );
            resetForm();
            setEditMode(false); // Quitter le mode édition
        } else {
            alert("Veuillez remplir tous les champs pour modifier un produit.");
        }
    };

    // Supprimer un produit
    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    // Préparer le formulaire pour la modification
    const editProduct = (product) => {
        setForm({
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            image: product.image,
        });
        setEditMode(true); // Activer le mode édition
    };

    // Réinitialiser le formulaire
    const resetForm = () => {
        setForm({ id: null, name: "", category: "", price: "", image: "" });
        setEditMode(false);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Tableau de bord Administrateur</h1>

            {/* Formulaire d'ajout/modification */}
            <div style={styles.form}>
                <input
                    type="text"
                    placeholder="Nom du produit"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Catégorie"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="number"
                    placeholder="Prix"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="URL de l'image"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    style={styles.input}
                />

                {!editMode ? (
                    <button onClick={addProduct} style={styles.addButton}>
                        Ajouter
                    </button>
                ) : (
                    <>
                        <button onClick={updateProduct} style={styles.updateButton}>
                            Modifier
                        </button>
                        <button onClick={resetForm} style={styles.cancelButton}>
                            Annuler
                        </button>
                    </>
                )}
            </div>

            {/* Liste des produits */}
            <h2 style={styles.subtitle}>Produits existants</h2>
            <ul style={styles.productList}>
                {products.map((product) => (
                    <li key={product.id} style={styles.productItem}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={styles.productImage}
                        />
                        <div>
                            <p><strong>{product.name}</strong></p>
                            <p>Catégorie : {product.category}</p>
                            <p>Prix : {product.price} Dh</p>
                        </div>
                        <div style={styles.actions}>
                            <button
                                onClick={() => editProduct(product)}
                                style={styles.editButton}
                            >
                                Modifier
                            </button>
                            <button
                                onClick={() => deleteProduct(product.id)}
                                style={styles.deleteButton}
                            >
                                Supprimer
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "900px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    title: {
        textAlign: "center",
        color: "#333",
    },
    subtitle: {
        textAlign: "center",
        color: "#666",
        margin: "20px 0",
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        marginBottom: "20px",
    },
    input: {
        flex: "1",
        minWidth: "200px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
    },
    addButton: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    updateButton: {
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    cancelButton: {
        padding: "10px 20px",
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    productList: {
        listStyle: "none",
        padding: "0",
    },
    productItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
    },
    productImage: {
        width: "80px",
        height: "80px",
        objectFit: "cover",
        borderRadius: "5px",
        marginRight: "10px",
    },
    actions: {
        display: "flex",
        gap: "10px",
    },
    editButton: {
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    deleteButton: {
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default AdminPage;
