import React from 'react'
import Logo from '../reusable/Logo'
import Menu from './Menu'

function Header() {
  return (
    <header>
      <div class="wrapper headwrap">
        <div class="navigation">
          <Logo />
          <Menu />
        </div>
        <div class="actions">
          <a href="#" class="website-btn btn-light">Log In</a>
          <a href="#" class="website-btn btn-dark">Try for free</a>
        </div>
      </div>
    </header>
  )
}

export default Header