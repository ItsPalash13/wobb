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
      image: "https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg",
      price: 120, // Random price
    },
    {
      id: 3,
      progress: 20,
      title: "TrendMaven",
      image: "https://ucarecdn.com/00beff47-869d-4e32-81b1-7f26201cfc9b/01.webp",
      price: 320, // Random price
    },
    {
      id: 4,
      progress: 98,
      title: "BettingAce",
      image: "https://cdn.dribbble.com/userupload/15858677/file/original-535189955aadb6643d71db7293e2afcd.jpg?resize=1024x819&vertical=center",
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
   
    <Grid container spacing={{md:4,sm:2}}>
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
