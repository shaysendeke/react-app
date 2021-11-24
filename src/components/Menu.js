import React from "react";
import "./menu.css";


// import Media from "media"

class Menu extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
          <section className="menuSection" >
             <img src={this.props.dish.src}></img> 
             <h3>{this.props.dish.title}</h3>
             <h6>{this.props.dish.info}</h6>
          </section>
      )};
  }


export default Menu;
