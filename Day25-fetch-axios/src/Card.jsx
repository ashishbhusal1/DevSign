import React from "react";

function Card({item}) {

  return (
    <>
      <div class="card" style={{width: '18rem'}}>
        <img src={item.thumbnail} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">
            {item.description}
          </p>
          <a href="#" class="btn btn-primary">
        Buy now ${item.price}
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
