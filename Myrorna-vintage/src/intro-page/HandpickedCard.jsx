import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HandpickedCard(props) {
  const [products, setProducts] = useState([]);
  let handpickedproducts = [];
  useEffect(() => {
    axios
      .get("http://localhost:4000/products/handpicked")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        console.log(products);
      })
      .then(() => {})
      .catch((error) => console.log(error));
  }, []);

  return (
    // .className?
    <section className="handpicked-section">
      {products.map((product, index) => {
        if (index % 2 === 0) {
          return (
            <div
              className="handpicked-card-container"
              id="handpicked-right"
              key={product.id}
            >
              <img src={"https://" + product.imgUrl} alt={product.type} />
              <div className="handpicked-content">
                <h1 className="handpicked-title">
                  {product.brandName} {product.type}
                </h1>
                <h2>Price: {product.price * 10} kr</h2>
                <h2>Size: {product.size}</h2>
              </div>
            </div>
          );
        } else {
          return (
            <div className="handpicked-card-container" key={product.id}>
              <div className="handpicked-content">
                <h1 className="handpicked-title">
                  {product.brandName} {product.type}
                </h1>
                <h2>Price: {product.price * 10} kr</h2>
                <h2>Size: {product.size}</h2>
              </div>
              <img src={"https://" + product.imgUrl} alt={product.type} />
            </div>
          );
        }
      })}
    </section>
  );
}
