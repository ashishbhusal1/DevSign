import React from 'react'

function BenefitsCard({title,desc,icon:Icon}) {
  return (
    <div class="card1">
          <div class="logo">
            {<Icon size={50}/>}
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