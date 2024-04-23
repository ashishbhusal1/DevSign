import React from "react";
import CardImage from './../../images/products/product2.png'

function ProductCard({ content }) {
  const desc = content.content;
  return (
    <ul class="product1">
      <li class="left">
        <span>{content.name}</span>
        <h2 class="product-heading">{content.title}</h2>
        <p class="product-paragraph">{desc.title}</p>
        <ul class="points">
          {desc.list.map((list, index) => {
            return (
              <li key={index}>
                <p>{list}</p>
              </li>
            );
          })}
        </ul>
      </li>
      <li class="right">
        {/* <div class="product-image">{<img src={content.image} alt="" />}</div> */}
        <div class="product-image">{<img src={CardImage} alt="" />}</div>
      </li>
    </ul>
  );
}

export default ProductCard;
