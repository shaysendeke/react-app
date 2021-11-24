import React from "react";
import "./header.css"

// import Media from "media"

class Header extends React.Component {
  constructor(jj) {
    super();
  }

  render() {
    return (
      <header className="Header">
        <img src="https://api.freelogodesign.org/files/4ea9f985b0734ebdad7317ce413838fb/thumb/logo_200x200.png?v=0" />
        <p>Shay Sendeke Sports & Athletics Agency</p>
      </header>
    );
  }
}

export default Header;
