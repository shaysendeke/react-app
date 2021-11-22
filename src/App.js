import "./App.css";
import React from "react";

import Media from "./components/Media";
import Employee from "./components/Employee";
import Div200 from "./components/Div200";
import RedPara from "./components/RedPara";
import EmployeeObject from "./components/ObjectEmployee";

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
          <Media />
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
          <RedPara />
          <EmployeeObject employee={newEmployee} />
        </header>
      </div>
    );
  }
}

export default App;
