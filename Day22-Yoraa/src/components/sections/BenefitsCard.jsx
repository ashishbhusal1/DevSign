import React from 'react'

function BenefitsCard(content) {
  return (
    <div class="card1">
          { <div class="logo">
            {content.icon}
          </div> }
          <div class="line"></div>
          <div class="text">
            <h4>{content.title}</h4>
            <p>
             {content.description}</p>
          </div>
        </div>
  )
}

export default BenefitsCard