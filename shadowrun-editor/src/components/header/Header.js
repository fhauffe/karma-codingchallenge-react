import React from 'react';
import logo from './header-banner.jpg'

class Header extends React.Component {
  render() {
    return (
      <div><img className="header-image" src={logo} alt="Logo" /></div>
    );
  }
}
  
export default Header;