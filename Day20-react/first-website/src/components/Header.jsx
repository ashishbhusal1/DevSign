
function Header() {
  return (
    <header>
      <div className="wrapper headwrap">
        <div className="navigation">
          <div className="logo">
            <img src='../images/logo.png' alt="Yoora" />
            <span>Yoora</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#">Product</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Company</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <div className="hammenu">
            <img src="./images/svg-logos/ham-menu.svg" />
          </div>
        </div>
        <div className="actions">
          <a href="#" className="website-btn btn-light">Log In</a>
          <a href="#" className="website-btn btn-dark">Try for free</a>
        </div>
      </div>
    </header>
  );
}
export default Header;
