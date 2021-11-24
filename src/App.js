import "./App.css";
import React from "react";

import Media from "./components/Media";
import Employee from "./components/Employee";
import Div200 from "./components/Div200";
import RedPara from "./components/RedPara";
import EmployeeObject from "./components/ObjectEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/MainSelf";
import Bakery from "./components/Bakery";
import BakeryDiv from "./components/bakeryDiv";
import RestaurantDiv from "./components/RetaurantDiv";
import Menudiv from "./components/MenuDiv";
import Staffdiv from "./components/Staffdiv";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const newEmployee = {
      name: "moshe",
      age: 22,
    };
    return (
      <div>
        <header>
          {/* <Media />
          <h1>this is Media component</h1>
          <Employee
            name="Ramzi Abed-Ramzi"
            image="https://i.imagesup.co/sz/600x-/images2/1508266_9b82906c-d5da-4c19-b545-1a199f6b55b9.jpg"
          />
          <Employee
            name="Cokhava Shavit"
            image="https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962__340.jpg"
          />
          <Employee
            name="Shira Stienbuch"
            image="https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060__340.jpg"
          />
          <Div200 />
          <RedPara /> */}
          <EmployeeObject employee={newEmployee} />
          <Header /><br></br><hr></hr>
          <Main /><br></br><hr></hr>
          <Footer /><br></br><hr></hr>
          <BakeryDiv></BakeryDiv><br></br><hr></hr>
          <RestaurantDiv/><br></br><hr></hr>
          <Menudiv/><br></br><hr></hr>
          <Staffdiv/>
        </header>
      </div>
    );
  }
}

export default App;
