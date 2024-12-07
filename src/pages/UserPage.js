import React from "react";

const UserPage = ({ products, addToCart }) => (
    <div>
        <h1>Produits</h1>
        <div style={styles.grid}>
            {products.map((product) => (
                <div key={product.id} style={styles.productCard}>
                    <img src={product.image} alt={product.name} style={styles.image} />
                    <h3>{product.name}</h3>
                    <p>Catégorie : {product.category}</p>
                    <p>Prix : {product.price} Dh</p>
                    <button onClick={() => addToCart(product)} style={styles.button}>
                        Ajouter au panier
                    </button>
                </div>
            ))}
        </div>
    </div>
);

const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
    },
    productCard: {
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "5px",
    },
    button: {
        marginTop: "10px",
        padding: "10px 15px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default UserPage;
