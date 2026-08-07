import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import FadeUp from "./FadeUp";
import "./Products.css";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const collections = ["All", "Kukuruku", "Udomosi", "Tsagwe"];

function Products() {
  const [active, setActive] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.collection === active);

  return (
    <section className="products" id="products">
      <FadeUp>
        <div className="products-header">
          <span className="products-label">Product Design</span>
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
              <div
                className="product-image-wrap"
                onClick={() => setLightboxImage(product)}
              >
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

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.image}
                alt={lightboxImage.name}
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                <span className="lightbox-collection">
                  {lightboxImage.collection}
                </span>
                <h3 className="lightbox-name">{lightboxImage.name}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Products;
