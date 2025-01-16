import React, { useState } from "react";
import "./App.css";
import Cards from "./Components/cards/Cards";
import FilterBox from "./Components/filterbar/FilterBox";
import InfoDrawer from "./Components/InfoDrawer/InfoDrawer";
import SearchAppBar from "./Components/navbar/SearchAppBar";
import { Stack } from "@mui/material";
import NavBelow from "./Components/navbelow/navbelow";


function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false); // State for drawer open/close
  const [drawerTitle, setDrawerTitle] = useState(""); // State for drawer title

  // Function to handle opening the drawer with a specific title
  const handleCardClick = (title) => {
    console.log(drawerTitle);
    setDrawerTitle(title);
    setDrawerOpen(true);
  };

  // Function to close the drawer
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
    <Stack>
      <SearchAppBar />
      <FilterBox />
      
      {/* Pass handleCardClick to Cards for interaction */}
      <Cards onCardClick={handleCardClick} />

      <InfoDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={handleCloseDrawer}
        title={drawerTitle}
      />

      </Stack>
      <NavBelow/>
    </>
  );
}

export default App;
