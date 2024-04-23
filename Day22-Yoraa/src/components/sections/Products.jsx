import React from "react";
import { ProductsCards } from "../../storage/HomeDB";
import ProductCard from "./ProductCard";
function Products() {
  return (
    <section class="products">
      <div class="wrapper productswrap">
        <ul class="products">
          <li class="products-list">
            <div class="line"></div>
            {ProductsCards.map((card) => {
              return <ProductCard key={card.id} content={card} />;
            })}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Products;
