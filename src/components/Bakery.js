import React from "react";
import "./bakery.css";


// import Media from "media"

class Bakery extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
          <section className="bakerySection" >
             <img src={this.props.bakery.src} alt=""></img> 
             <h3>{this.props.bakery.title}</h3>
             <p>{this.props.bakery.info}</p>
          </section>
      )};
  }


export default Bakery;
