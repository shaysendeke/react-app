import Menu from "./Menu";

import React from "react";
import "./menu.css";


// import Media from "media"

class Menudiv extends React.Component {
  constructor(props) {
    super();
  }

  render() {
      const pizza = {
          title: "Pizza",
          info: "lorem lorem bla bla bla",
          src: "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__340.jpg",
      }
      const salad ={
          title: "Salad",
          info: "lorem lorem bla bla bla",
          src: "https://cdn.pixabay.com/photo/2021/01/10/04/37/salad-5904093__340.jpg",
          }
          const desert = {
              title: "Desert",
              info: "lorem lorem bla bla bla",
              src: "https://cdn.pixabay.com/photo/2021/01/10/04/37/salad-5904093__340.jpg",
          }
              
    return (
        <div className="menu">
         <Menu dish = {pizza}/>
         <Menu dish = {salad}/>
         <Menu dish = {desert}/>
        </div>

        )};

  }


export default Menudiv;
