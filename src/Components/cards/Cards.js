import React, { useState } from "react";
import { Stack } from "@mui/material";
import CardView from "./cardview/CardView";
import { ToggleButton } from "@mui/material";

const toggleButtonStyles = {
  borderRadius: "50px", // Fully rounded corners
  padding: "5px 12px", // Consistent padding
  textTransform: "none", // Prevent all caps
  color: "#383838", // Text color
  fontWeight: "bold", // Bold text
  borderColor: "#E0E0E0", // Border color
  
};

export default function Cards({ onCardClick }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = (option) => {
    setSelectedOption(option); // Update selected option
  };



  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{ padding: 2, backgroundColor: "#fff", borderRadius: "12px", marginTop:{md:2, sm:8, xs:20} }}
    >
      {/* Buttons with individual spacing */}
      <Stack
        direction="row"
        spacing={2} >
        <ToggleButton
          value="option0"
          selected={selectedOption === "option0"}
          onClick={() => handleSelection("option0")}
          sx={toggleButtonStyles}
        >
          All
        </ToggleButton>
        <ToggleButton
          value="option1"
          selected={selectedOption === "option1"}
          onClick={() => handleSelection("option1")}
          sx={toggleButtonStyles}
        >
          Applied
        </ToggleButton>
        <ToggleButton
          value="option2"
          selected={selectedOption === "option2"}
          onClick={() => handleSelection("option2")}
          sx={toggleButtonStyles}
        >
          Hired
        </ToggleButton>
        <ToggleButton
          value="option3"
          selected={selectedOption === "option3"}
          onClick={() => handleSelection("option3")}
          sx={toggleButtonStyles}
        >
          Closed
        </ToggleButton>
      </Stack>

      <CardView onCardClick={onCardClick}/>
    </Stack>
  );
}
