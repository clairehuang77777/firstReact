import toggleIcon from '../assets/toggle.svg'
import logoIcon from '../assets/logo.svg'
import SearchIcon from '../assets/search.svg'
import ShippingIcon from '../assets/cart.svg'
import MoonIcon from '../assets/moon.svg'
import { NavbarMenu } from './NavbarMenu'

export function Headers(){
  return (
    <>
    <header className="site-header">
        <div class="NavBar-area">
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label htmlFor="navbar-toggle" className="burger-container">
            <img src={toggleIcon} alt="Toggle icon" className="toggleIcon" />
          </label>
          <NavbarMenu />
        </div>
        <div class="Alpha-logo-area">
          <a className="header-logo-container" href="#">
            <img src={logoIcon} alt="logo icon" className="logoIcon" />
          </a>
        </div>
        <div class="click-logo-area">
          <a className="search-container" href="#">
            <img src={SearchIcon} alt="SearchIcon" className="SearchIcon" />
          </a>
          <a className="shippingcart-container" href="#">
            <img src={ShippingIcon} alt="ShippingIcon" className="ShippingIcon" />
          </a>
          <a className="moon-container" href="#">
            <img src={MoonIcon} alt="MoonIcon" className="MoonIcon" />
          </a>
        </div>
    </header>
    </>
)}