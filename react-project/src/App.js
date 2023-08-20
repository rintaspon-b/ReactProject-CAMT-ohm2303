

import React, { useState } from "react";
import "./App.css";
import ButtonIcon from "./feature/SubComponent/ButtonIcon";
import OptionMain from "./feature/OptionMain";
import Report from "./feature/Report";
import PhotoSlide from "./feature/PhotoSlide";
import RegisterReader from "./feature/RegisterReader"; // Import RegisterReader component
import NovelMain from "./feature/NovelMain";
import RegisterAuthor from "./feature/RegisterAuthor"; // Fix typo in component name
import SelectForPay from "./feature/SubComponent/SelectForPay";
import Login from "../src/feature/Login";
import AddBook from "../src/feature/AddBook";
import BankAccountPage from "../src/feature/BankAccountPage";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //Report
  const [isReportOpen, setIsReportOpen] = useState(false);
  const handleReportButtonClick = () => {
    setIsReportOpen(!isReportOpen);
  };

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const handleRegisterButtonClick = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleRegisterArButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const editIcon = require("./pics/Icon/edit.png")

  const imageslide = [
    "pics/imgSlide/photoslide1.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOA0CrgQ3eGYvBvQTW9Qad3T8kR-8e2A1S2FGo_eTblluNq8PT62g4Ij5YwSuA98VmNk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtBiLGUzd2KZeyWLkmY9fYJD8iIHwy9ZRkwqtGmFFrhX6XZNhmIVXaCibCcVdsKuJcrc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFdYghoN17eaN_SnZ1UiozwJKasfEpmCrVrBeLNWw3dhShfFVeAnmm72caVtpJQHIaRQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VVTVl-kTz0iZ7x8AO-nx-UuHvcQPdk70FET3SnSeABqC-HONLYCvFQjqRkoM7C3mkBU&usqp=CAU",
    "https://chytomo.com/wp-content/uploads/2022/12/creative-composition-for-world-book-day.jpg",
  ];

  return (
  <>
  <BankAccountPage></BankAccountPage>
  </>

  );
}

export default App;
