import React from "react";
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  LinearProgress, 
  Box, 
  Avatar 
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardActionArea from "@mui/material/CardActionArea";

import "@fontsource/poppins/300.css";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

export default function GridItem({ title, image, progress, onCardClick, price }) {
  return (
    <div onClick={() => onCardClick(title)}>
      <Box
        sx={{
          position: "relative", // Required for positioning avatar
          "&:hover .hover-avatar": {
            opacity: 1, // Show avatar on hover
          },
        }}
      >
        <Card
          sx={{
            maxHeight: 450, // Increased card height
            borderRadius: "16px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {/* Avatar Top Right (Initially Hidden) */}
          <Box
            className="hover-avatar"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              opacity: 0, // Hidden initially
              transition: "opacity 0.3s ease", // Smooth fade-in transition
            }}
          >
            <Avatar 
              src={'https://cdn.iconscout.com/icon/free/png-256/free-louis-vuitton-logo-icon-download-in-svg-png-gif-file-formats--brand-fashion-pack-logos-icons-2854265.png'} 
              alt={`${title} avatar`} 
              sx={{
                width: 40,
                height: 40,
                background: "white",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Add shadow to the avatar
              }}
            />
          </Box>

          <CardActionArea>
            {/* Larger Image */}
            <CardMedia
              component="img"
              height="300" // Increased height for the image
              image={image}
              alt={title}
              sx={{
                transition: "transform 0.3s ease", // Smooth zoom transition
                "&:hover": {
                  transform: "scale(1.02)", // Zoom effect
                },
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            />
            {/* Compact Content Section */}
            <CardContent
              sx={{
                paddingTop: "6px", // Slightly reduced padding for compactness
              }}
            >
              {/* Title with Price */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* Title */}
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    marginBottom: 0,
                    fontSize: 16,
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis", // Truncate long titles
                  }}
                >
                  {title}
                </Typography>

                {/* Price */}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  ${price}
                </Typography>
              </Box>

              {/* Subtext */}
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontSize: 14,
                  color: "rgb(141, 141, 141)",
                  margin: 0,
                }}
              >
                Barter Worth
              </Typography>

              {/* Progress Bar with Label */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "4px",
                  }}
                >
                  <Box></Box> {/* Placeholder for alignment */}
                  <ThemeProvider theme={theme}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ fontWeight: "400" }}
                    >
                      {100 - progress} left
                    </Typography>
                  </ThemeProvider>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 5,
                    borderRadius: "2px",
                    backgroundColor: "#E0E0E0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#3C3C43", // Progress bar color
                    },
                  }}
                />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
}
