import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CampaignIcon from "@mui/icons-material/Campaign";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import Grid from "@mui/material/Grid2";

export default function Instructions() {
    const products = [
        { name: "Sustainable T-Shirt", price: "$25", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR3-u_bag5Rw-1rmNsUnd7HT8VZBadsVw5YMkwGfIkVzTZfV2aHVzASHMfYthDij__vPBYWeJ26nzvJq05NzYibKwcIB2A8DxM45NDx_TM" },
        { name: "Eco-Friendly Jacket", price: "$60", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrlE3NyS_Y9Ox5msYPddBUpVGqwC-Mc8yNM5VTe_FdZRYpVB_28H7DYFXozym4mOrZrk7xpbTcg3gzGhHUeQjC7YyNbGUWO15UMIAH4S8IyP8PebH4gcWG" },
        { name: "Reusable Tote Bag", price: "$15", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nOKkbHrRyT19vk5TcBGE0PvbQDmD2GU2Iw&s" },
       
    ];

    return (
        <Box
          sx={{
            textAlign: "center",
            marginTop: 4,
          }}
        >
          {/* Campaign Instructions */}
          <Typography
            sx={{
              fontWeight: 300,
              marginBottom: 1,
              fontSize: 40,
              letterSpacing: 1,
            }}
          >
            Campaign Instructions
          </Typography>

          <List
            sx={{
              width: "100%",
              maxWidth: 600,
              margin: "0 auto",
              bgcolor: "background.paper",
              borderRadius: 2,
              padding: 2,
            }}
          >
            {/* Post Scheduling and Timing */}
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Post Scheduling and Timing"
                secondary="Ensure your content is posted within the campaign timeline. Time your posts during peak engagement hours (6 PM - 9 PM) for maximum reach."
              />
            </ListItem>
            
            {/* Content Guidelines */}
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Content Guidelines"
                secondary="Adhere to the campaign's content guidelines, including tone, visuals, and hashtags. Avoid using inappropriate language or irrelevant tags."
              />
            </ListItem>
            
            {/* Engagement and Responses */}
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Engagement and Responses"
                secondary="Actively engage with your audience by responding to comments and messages. Use your platform to spark meaningful conversations about the brand."
              />
            </ListItem>
            
            {/* Performance Tracking */}
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Performance Tracking"
                secondary="Track your post's performance and submit analytics (reach, impressions, engagement rate) accurately and on time as outlined in the campaign brief."
              />
            </ListItem>
          </List>

          {/* Divider */}
          <center>
            <Divider sx={{ margin: "16px 0", marginBottom: 7, width: "50%" }} />
          </center>

          {/* About the Campaign */}
          <Typography
            sx={{
              fontWeight: 300,
              marginBottom: 1,
              fontSize: 40,
              letterSpacing: 1,
            }}
          >
            About the Campaign
          </Typography>

          <List
            sx={{
              width: "100%",
              maxWidth: 600,
              margin: "0 auto",
              bgcolor: "background.paper",
              borderRadius: 2,
              padding: 2,
            }}
          >
            {/* Campaign Overview */}
            <ListItem>
              <ListItemIcon>
                <CampaignIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Campaign Overview"
                secondary="This campaign focuses on promoting sustainable fashion through social media influencers, creating awareness about eco-friendly choices."
              />
            </ListItem>

            {/* Key Metrics */}
            <ListItem>
              <ListItemIcon>
                <TrendingUpIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary="Key Metrics"
                secondary="The campaign aims to achieve a 30% increase in brand engagement and reach at least 500,000 unique impressions by the end of the campaign."
              />
            </ListItem>

            {/* Target Audience */}
            <ListItem>
              <ListItemIcon>
                <PeopleIcon sx={{ color: "#4caf50" }} />
              </ListItemIcon>
              <ListItemText
                primary="Target Audience"
                secondary="Our primary audience includes individuals aged 18-35 who are interested in sustainable lifestyle choices and fashion trends."
              />
            </ListItem>
          </List>

          {/* Divider */}
          <center>
            <Divider sx={{ margin: "16px 0", marginBottom: 7, width: "50%" }} />
          </center>

          {/* Products Section */}
          <Typography
            sx={{
              fontWeight: 300,
              marginBottom: 1,
              fontSize: 40,
              letterSpacing: 1,
            }}
          >
            Products
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{
              width: "100%",
              maxWidth: 800,
              margin: "0 auto",
              padding: 2,
              alignItems:"center",
              justifyContent:"center"
            }}
          >
            {products.map((product, index) => (
              <Grid xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: 250,
                    margin: "0 auto",
                    boxShadow: 2,
                    borderRadius: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginBottom: 1 }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
    );
}
