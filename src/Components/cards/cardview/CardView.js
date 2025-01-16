import React from "react";
import Grid from "@mui/material/Grid2";
import GridItem from "./GridItem";


export default function CardView({onCardClick}) {
  // JSON array with title, description, and image
  const items = [
    {
      id: 1,
      title: "TechNova",
      progress: 37,
      image: "https://cdn.dribbble.com/userupload/8987763/file/original-c76f27d4108be04bba93fea658b695e8.png",
      price: 245, // Random price
    },
    {
      id: 2,
      progress: 88,
      title: "InfluenceSphere",
      image: "https://sociallypowerful.com/wp-content/uploads/2023/10/Ecommerce-Influencer-Marketing-Banner.jpg",
      price: 120, // Random price
    },
    {
      id: 3,
      progress: 20,
      title: "TrendMaven",
      image: "https://www.dotyeti.com/wp-content/uploads/2022/11/Neil-Patel-1024x459.jpg",
      price: 320, // Random price
    },
    {
      id: 4,
      progress: 98,
      title: "BettingAce",
      image: "https://www.shutterstock.com/image-vector/sports-betting-banner-website-button-260nw-2167648883.jpg",
      price: 75, // Random price
    },
    {
      id: 5,
      progress: 53,
      title: "Sipfinity",
      image: "https://cdn.prod.website-files.com/62e027fdd9ac2750624311e8/62e027fdd9ac27f77a4327ce_Banner%2010IBI.jpg",
      price: 430, // Random price
    },
    {
      id: 6,
      progress: 38,
      title: "BubblyBrew",
      image: "https://img.pikbest.com/origin/08/98/92/724pIkbEsTPay.jpg!sw800",
      price: 190, // Random price
    },
  ];
  
  

  return (
   
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid key={item.id} size={{md:4, sm:6, xs:12}}>
          {/* Trigger drawer open on card click */}
          <GridItem
            title={item.title}
            image={item.image}
            progress={item.progress}
            onCardClick={onCardClick}
            price={item.price}
          />
        </Grid>
      ))}
    </Grid>

  );
}
