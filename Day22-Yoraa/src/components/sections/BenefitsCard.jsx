import React from 'react'

function BenefitsCard({title,desc}) {
  return (
    <div class="card1">
          <div class="logo">
          <i className="ri-macbook-line"></i>
          </div>
          <div class="line"></div>
          <div class="text">
            <h4>{title}</h4>
            <p>
             {desc}</p>
          </div>
        </div>
  )
}

export default BenefitsCard