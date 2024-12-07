import React from "react";

const CartPage = ({ cart, removeFromCart }) => {
    // Calcul du total
    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    return (
        <div style={styles.container}>
            <h1>Votre panier</h1>
            {cart.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <>
                    <ul style={styles.cartList}>
                        {cart.map((product) => (
                            <li key={product.id} style={styles.cartItem}>
                                <img src={product.image} alt={product.name} style={styles.image} />
                                <div>
                                    <p><strong>{product.name}</strong></p>
                                    <p>Prix : {product.price} Dh</p>
                                </div>
                                <button onClick={() => removeFromCart(product.id)} style={styles.button}>
                                    Retirer
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h2 style={styles.total}>Total : {calculateTotal()} Dh</h2>
                </>
            )}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    cartList: {
        listStyle: "none",
        padding: "0",
    },
    cartItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
    },
    image: {
        width: "80px",
        height: "80px",
        objectFit: "cover",
        borderRadius: "5px",
        marginRight: "10px",
    },
    button: {
        backgroundColor: "red",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    total: {
        textAlign: "right",
        fontSize: "18px",
        fontWeight: "bold",
        marginTop: "20px",
    },
};

export default CartPage;
