import React, { useState } from "react";
import Search from "./feature/SubComponent/Search";
import Input from "./feature/SubComponent/Input";
import Text from "./feature/SubComponent/Text";
import cross from "./Icon/cross-circle.png";
import cross1 from "./Icon/cross-circle (1).png";
import "./App.css";
import ButtonIcon from "./feature/SubComponent/ButtonIcon";
import PhotoSlid from "./feature/PhotoSlid";
import OptionMain from "./feature/OptionMain";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const imageslide = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOA0CrgQ3eGYvBvQTW9Qad3T8kR-8e2A1S2FGo_eTblluNq8PT62g4Ij5YwSuA98VmNk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtBiLGUzd2KZeyWLkmY9fYJD8iIHwy9ZRkwqtGmFFrhX6XZNhmIVXaCibCcVdsKuJcrc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFdYghoN17eaN_SnZ1UiozwJKasfEpmCrVrBeLNWw3dhShfFVeAnmm72caVtpJQHIaRQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VVTVl-kTz0iZ7x8AO-nx-UuHvcQPdk70FET3SnSeABqC-HONLYCvFQjqRkoM7C3mkBU&usqp=CAU",
    "https://chytomo.com/wp-content/uploads/2022/12/creative-composition-for-world-book-day.jpg", 
  ];

  return (
    <div className="App">
      <Search value={searchValue} onChange={handleSearchChange} size={"small"} />
      <Input
        type="text"
        placeholder="Enter something..."
        value={inputValue}
        onChange={handleInputChange}
        size={"small"}
      />
      <Text size={18}>test</Text>

      <ButtonIcon
        defaultImg={cross}
        hoveredImg={cross1}
        url={"./feature/Home.js"}
        title={"cancel"}
        className="icon-button"
      />
      <div className="photoslid-container">
        <PhotoSlid images={imageslide} />
      </div>
      <OptionMain />
    </div>
    
  );
}

export default App;
