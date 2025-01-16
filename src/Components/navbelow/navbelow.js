import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign"; // Mic icon for Campaign
import GroupIcon from "@mui/icons-material/Group"; // People icon for Wobble
import ChatIcon from "@mui/icons-material/Chat"; // Messages icon

export default function NavBelow() {
  const [selected, setSelected] = useState(0);

  const handleChange = (event, newValue) => {
    setSelected(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
        display:{sx:"block",md:"none"}
      }}
      elevation={3}
    >
      <BottomNavigation
        value={selected}
        onChange={handleChange}
        showLabels
        sx={{
          backgroundColor: "#fff",
          borderTop: "1px solid #ddd",
        }}
      >
        <BottomNavigationAction
          label="Campaign"
          icon={<CampaignIcon />}
          sx={{
            color: selected === 0 ? "blue" : "gray",
            "&.Mui-selected": {
              color: "blue",
            },
          }}
        />
        <BottomNavigationAction
          label="Wobble"
          icon={<GroupIcon />}
          sx={{
            color: selected === 1 ? "blue" : "gray",
            "&.Mui-selected": {
              color: "blue",
            },
          }}
        />
        <BottomNavigationAction
          label="Messages"
          icon={<ChatIcon />}
          sx={{
            color: selected === 2 ? "blue" : "gray",
            "&.Mui-selected": {
              color: "blue",
            },
          }}
        />
        
      </BottomNavigation>
    </Paper>
  );
}
