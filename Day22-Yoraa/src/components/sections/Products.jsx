import React from 'react'
import { ProductsCards } from '../../storage/HomeDB'
import ProductCard from './ProductCard'
function Products() {
  return (
        ProductsCards.map(card=>{return(
            <ProductCard key={card.id} content={card}/>)
        })
  )
}

export default Products