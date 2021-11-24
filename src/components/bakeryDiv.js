import Bakery from "./Bakery";

import React from "react";
import "./bakery.css";


// import Media from "media"

class BakeryDiv extends React.Component {
  constructor(props) {
    super();
  }

  render() {
      const bakery1 = {
        src: "https://cdn-icons.flaticon.com/png/128/1755/premium/1755171.png?token=exp=1637598691~hmac=d5c5f7e22e336d75e603310e3a4b1dff",
        title: "candies",
        info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
      }
      const bakery2 ={
          src: "https://cdn-icons-png.flaticon.com/128/2965/2965574.png",
          title: "cakes",
          info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
          }
          const bakery3 = {
              src: "https://cdn-icons-png.flaticon.com/128/4037/4037706.png",
              title: "biscuits",
              info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."             
          }
          const bakery4 = {
            src: "https://cdn-icons-png.flaticon.com/128/541/541732.png",
            title: "candies",
            info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
          }
          const bakery5 ={
              src: "https://cdn-icons-png.flaticon.com/128/3789/3789902.png",
              title: "cakes",
              info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
              }
              const bakery6 = {
                  src: "https://cdn-icons-png.flaticon.com/128/541/541732.png",
                  title: "biscuits",
                  info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."             
              }
    return (
        <div className="bakery">
         <Bakery bakery = {bakery1}/>
         <Bakery bakery = {bakery2}/>
         <Bakery bakery = {bakery3}/>
         <Bakery bakery = {bakery4}/>
         <Bakery bakery = {bakery5}/>
         <Bakery bakery = {bakery6}/>
        </div>

        )};

  }


export default BakeryDiv;
