import React from "react";

function ProductCard({content}) {
  const desc=content.content;
  return (
    <section class="products">
      <div class="wrapper productswrap">
        <ul class="products">
          <li class="products-list">
            <div class="line"></div>
            <ul class="product1">
              <li class="left">
                <span>{content.name}</span>
                <h2 class="product-heading">{content.title}</h2>
                <p class="product-paragraph">{desc.title}</p>
                <ul class="points">
                  {
                    desc.list.map((list,index)=>{
                      return(
                        <li key={index}>
                          <p>{list}</p>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li class="right">
                <div class="product-image">{
                  <img src={content.image}alt="" />
                }
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductCard;
