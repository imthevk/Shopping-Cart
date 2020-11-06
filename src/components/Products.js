import React from "react";

export default function Products() {
 
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="products-image">
            <img src={product.image} alt="not found" />
          </div>
          <div className="product-details">
            <div className="product-name">{product.name}</div>
            <div className="product-price">₹{product.price}.00</div>
          </div>

          <div className="addCart">Add to cart</div>
          {product.status === "hot" ? <div className="hot">Hot</div> : ""}
          {product.status === "new" ? <div className="new">New</div> : ""}
          {product.status === "brand new" ? <div className="brandNew">Brand New</div> : ""}
        </div>
      ))}
    </div>
  );
}
