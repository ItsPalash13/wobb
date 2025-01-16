import React, { useState } from "react";
import {
  SwipeableDrawer,
  Typography,
  Box,
  Avatar,
  Stack,
  IconButton,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "@fontsource/roboto"; // Import Roboto font
import Eligibility from "./Eligibility/Eligibility";
import Instructions from "./Instructions/Instructions";
import Payouts from "./Payouts/Payouts";

// Create a theme using Roboto font
const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Use Roboto as the primary font
  },
});

export default function InfoDrawer({ isOpen, toggleDrawer, title }) {
  const [selectedTab, setSelectedTab] = useState("eligibility");

  const handleToggle = (event, newTab) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  // Render the content based on the selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case "eligibility":
        return <Eligibility title={title} />;
      case "instructions":
        return <Instructions />;
      case "payout":
        return <Payouts />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={() => toggleDrawer(false)} // Pass function reference
        onOpen={() => toggleDrawer(true)} // Pass function reference
        PaperProps={{
          sx: {
            borderRadius: "20px 20px 0 0", // Rounded top corners
            padding: "16px",
            maxHeight: "80vh",
            overflowY: "auto",
          },
        }}
      >
        {/* Toggle Button Group */}
        <Box
          sx={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            width: {md:"40%",sx:"70%"},
            bgcolor: "white",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
            zIndex: 1000,
            padding: "12px 16px",
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
          }}
        >
          <ToggleButtonGroup
            value={selectedTab}
            exclusive
            onChange={handleToggle}
            fullWidth
            sx={{
              "& .MuiToggleButton-root": {
                textTransform: "none",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                padding: "10px 16px",
                transition: "background-color 0.3s, color 0.3s",
              },
              "& .Mui-selected": {
                backgroundColor: "#0D5BD5",
                color: "white",
                "&:hover": {
                  backgroundColor: "#0D5BD5",
                },
              },
              "& .MuiToggleButton-root:not(.Mui-selected):hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <ToggleButton value="eligibility">Eligibility</ToggleButton>
            <ToggleButton value="instructions">Instructions</ToggleButton>
            <ToggleButton value="payout">Payout</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Drawer Content */}
        <Box
          sx={{
            width: "100%",
            paddingBottom: 10,
          }}
          role="presentation"
        >
          {/* Header Section */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ mb: 2 }}
          >
            {/* Left-aligned: Presented by, Avatar, and Title */}
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar
                alt="Presenter Logo"
                src="https://via.placeholder.com/40" // Replace with actual image source
                sx={{ width: 40, height: 40 }}
              />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Presented by
                </Typography>
                <Typography variant="h6" sx={{ fontSize: 15, fontWeight: "bold" }}>
                  {title}
                </Typography>
              </Box>
            </Stack>

            {/* Right-aligned: Save, Share, and Apply */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton>
                <BookmarkIcon sx={{ color: "#3f51b5" }} />
              </IconButton>
              <IconButton>
                <ShareIcon sx={{ color: "#3f51b5" }} />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  background: "#080C51",
                  borderRadius: "20px",
                  textTransform: "none",
                  padding: "6px 16px",
                  fontWeight: "bold",
                }}
              >
                Apply
              </Button>
            </Stack>
          </Stack>

          {/* Render the selected tab's content */}
          {renderContent()}
        </Box>
      </SwipeableDrawer>
    </ThemeProvider>
  );
}
