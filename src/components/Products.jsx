import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import FadeUp from "./FadeUp";
import "./Products.css";

const collections = ["All", "Kukuruku", "Udomosi", "Tsagwe"];

function Products() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.collection === active);

  return (
    <section className="products" id="products">
      <FadeUp>
        <div className="products-header">
          <span className="products-label">Object Design</span>
          <h2 className="products-title">Products</h2>
          <div className="products-filter">
            {collections.map((col) => (
              <button
                key={col}
                className={`products-filter-btn ${active === col ? "products-filter-btn--active" : ""}`}
                onClick={() => setActive(col)}
              >
                {col}
              </button>
            ))}
          </div>
        </div>
      </FadeUp>

      <div className="products-grid">
        {filtered.map((product, index) => (
          <FadeUp delay={index * 0.05} key={product.id}>
            <div className="product-card">
              <div className="product-image-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <span className="product-collection">{product.collection}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export default Products;
