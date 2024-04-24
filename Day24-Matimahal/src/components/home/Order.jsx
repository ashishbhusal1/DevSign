import React from 'react'
import { OrderContent } from '../storage/HomeDb'

function Order() {
  return (
    <section class="order-online">
            <div class="wrapper">
                  <span>{OrderContent[0].title}</span>
                  <div class="big-text">
                        <h2><strong>Order</strong> by call?</h2>
                  </div>
                  <p>{OrderContent[0].description}</p>
                  <a class="btn-primary" href="tel:+977-9802974990">{OrderContent[0].alt}</a>
            </div>
      </section>
  )
}

export default Order