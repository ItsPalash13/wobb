import React from "react";
import {
  Box,
  Stack,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import StyleIcon from "@mui/icons-material/Style";
import CakeIcon from "@mui/icons-material/Cake";

const Eligibility = ({ title }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: 4,
      }}
    >
      {/* Top Section */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ marginBottom: 1 }}
      >
        Joined on January 1, 2023 {/* Static date */}
      </Typography>
      <Typography
        sx={{
          fontWeight: "bold",
          marginBottom: 1,
          fontSize: 100,
          letterSpacing: 2,
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Hired 120 influencers {/* Static data */}
      </Typography>

      {/* Image Section */}
      <Box sx={{ paddingLeft: 3, paddingRight: 3, marginTop: 10 }}>
        <img
          src={
            "https://cdn.dribbble.com/userupload/8987763/file/original-c76f27d4108be04bba93fea658b695e8.png"
          }
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
          }}
        />
      </Box>

      {/* Quote Section */}
      <Box sx={{ padding: 10, paddingTop: 6, paddingBottom: 5 }}>
        <Typography
          sx={{
            textAlign: "center",
            lineHeight: 1.6,
            fontWeight: 300,
            fontSize: 35,
            color: "#222222",
          }}
        >
          "Proper Prompts aims to help make generating high quality and highly
          relevant AI assets easier and more accessible."
        </Typography>
      </Box>

      {/* Eligibility Criteria Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh", // Adjust height as needed
        }}
      >
        <Stack>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Eligibility Criteria
          </Typography>

          {/* List */}
          <List
            sx={{
              width: "100%",
              maxWidth: 480, // Adjust width for better display
              bgcolor: "background.paper",
              borderRadius: 2, // Optional for rounded corners
            }}
          >
            {/* Location */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#3f51b5" }}>
                  <LocationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Delhi, India, Gurgaon, Haryana, India, Mumbai, Maharashtra, India, Faridabad, Haryana, Indore..."
                secondary="View more"
              />
            </ListItem>

            {/* Follower Count */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#f57c00" }}>
                  <GroupIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="10k to 50k, 50k to 250k followers"
                secondary="Followers"
              />
            </ListItem>

            {/* Fashion Categories */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#7b1fa2" }}>
                  <StyleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Fashion Tips, Plus Size Fashion, Sustainable Fashion, Seasonal Fashion, Vintage Fashion"
                secondary="Categories"
              />
            </ListItem>

            {/* Age Range */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#4caf50" }}>
                  <CakeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="18-35 years" secondary="Age Range" />
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Box>
  );
};

export default Eligibility;
