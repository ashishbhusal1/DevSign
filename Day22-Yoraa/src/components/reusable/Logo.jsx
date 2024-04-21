import React from 'react'
import {Logo as LogoImg} from '../../scripts/Images'

function Logo() {
  return (
    <div class="logo">
            <img src={LogoImg} alt="Yoora" />
            <span>Yoora</span>
          </div>
  )
}

export default Logo