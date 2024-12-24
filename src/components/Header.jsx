import toggleIcon from '../assets/toggle.svg'
import logoIcon from '../assets/logo.svg'
import { NavbarMenu } from './NavbarMenu'

export function Headers(){
  return (
    <>
    <header className="site-header">
      <div className="header-container mx-auto">
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlfor="navbar-toggle" className="burger-container">
          <img src={toggleIcon} alt="Toggle icon" className="toggleIcon" />
        </label>
        <NavbarMenu />
        <a className="header-logo-container" href="#">
          <img src={logoIcon} alt="logo icon" className="logoIcon" />
        </a>
      </div>
    </header>
    </>
)}