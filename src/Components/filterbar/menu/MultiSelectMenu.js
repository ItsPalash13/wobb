import React, { useState } from "react";
import {
  Menu,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import '@fontsource/poppins/500.css';
const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
  });

export default function MultiSelectMenu({ list, name }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (value) => {
    const currentIndex = selectedItems.indexOf(value);
    const newSelectedItems = [...selectedItems];

    if (currentIndex === -1) {
      newSelectedItems.push(value);
    } else {
      newSelectedItems.splice(currentIndex, 1);
    }

    setSelectedItems(newSelectedItems);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Button
        variant="outlined"
        onClick={handleMenuOpen}
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        sx={{
          width:"100%",
          textTransform: "none",
          borderRadius:2,
          backgroundColor: "white", // White background
          color: "#383838", // Font color #383838
          padding: "12px 24px", // Padding
          borderColor: "#E0E0E0", // Border color
          whiteSpace: "nowrap", // Prevent line breaks
          "&:hover": {
            backgroundColor: "#f5f5f5", // Light grey on hover
          },
        }}
      >
        {name}
      </Button>
      </ThemeProvider>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          style: { width: "250px" }, // Auto height based on content
        }}
      >
        <List>
          {list.map((item) => (
            <ListItem key={item} button onClick={() => handleToggle(item)}>
              <Checkbox
                checked={selectedItems.indexOf(item) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Menu>
    </div>
  );
}
