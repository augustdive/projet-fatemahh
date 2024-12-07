// src/components/ProductList.js
import React, { useState } from "react";

// Liste de produits statique pour commencer
const initialProducts = [
    { id: 1, name: "charm", category: "splittable Sun & Moon Dangle Charm", price: 150, image: "https://ca.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw03f3dd30/productimages/singlepackshot/763585C01_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5" },
    { id: 2, name: "Forever & Always Infinity", category: "charm", price: 200, image: "https://ca.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw43ebaa77/productimages/singlepackshot/793243C00_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5" },
    { id: 3, name: "Blue Murano Glass Butterfly", category: "Charms", price: 180, image: "https://ca.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw980a6e6f/productimages/singlepackshot/792698C01_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5" },
    { id: 4, name: "Elevated Red Heart Ring", category: "rings", price: 110, image: "https://ca.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwcea8721a/productimages/singlepackshot/198421C02_RGB.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5" },
    { id: 5, name: "Pearl Ring Brand Set", category: "rings", price: 175, image: "https://ca.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwbea2807a/productimages/singlepackshot/NAMPS0554.jpg?sw=440&sh=440&sm=fit&sfrm=png&bgcolor=F5F5F5" },
];


const ProductList = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [products] = useState(initialProducts);

    // Filtrage des produits
    const filteredProducts = products.filter((product) => {
        const matchesName = product.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category ? product.category === category : true;
        return matchesName && matchesCategory;
    });

    return (
        <div>
            <h2>Liste des produits</h2>

            {/* Barre de recherche */}
            <input
                type="text"
                placeholder="Rechercher un produit..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginRight: "10px" }}
            />

            {/* Filtrer par catégorie */}
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Toutes les catégories</option>
                <option value="Catégorie 1">Catégorie 1</option>
                <option value="Catégorie 2">Catégorie 2</option>
            </select>

            {/* Liste des produits */}
            <div style={{ marginTop: "20px" }}>
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "5px",
                        }}
                    >
                        <h3>{product.name}</h3>
                        <p>Catégorie : {product.category}</p>
                        <p>Prix : {product.price} €</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
