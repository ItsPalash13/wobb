import React from "react";
import { Box, Button } from "@mui/material";
import MultiSelectMenu from "./menu/MultiSelectMenu"; // Importing from the specified path
import Grid from '@mui/material/Grid2';

import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function FilterBox() {
  const payoutOptions = ["$10-$50", "$50-$100", "$100+"]; // Options for Payout
  const categoryOptions = ["Technology", "Healthcare", "Education", "Finance"]; // Options for Category
  const platformOptions = ["Web", "Mobile", "Desktop"]; // Options for Platform
  const cashPayoutOptions = ["Cash", "Gift Cards", "Points"]; // Options for Cash Payout
  const postingDateOptions = ["Today", "This Week", "This Month"]; // Options for Posting Date
  const locationOptions = ["New York", "San Francisco", "Remote"]; // Options for Location

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: 200,
        backgroundColor: "white",
        marginTop:{md:10,xs:20},
      }}
    >
      <Box
        sx={{
          backgroundColor: "#EDEDED",
          borderRadius: "12px",
          padding: 1,
          display: "inline-block",
          maxWidth: "90%",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* Define each filter as a grid item */}
          <Grid size={{xs:12,sm:6,md:"auto"}}>
            <MultiSelectMenu list={payoutOptions} name="Payout" />
          </Grid>
          <Grid size={{xs:12,sm:6,md:"auto"}}>
            <MultiSelectMenu list={categoryOptions} name="Category" />
          </Grid>
          <Grid size={{xs:12,sm:6,md:"auto"}}>
            <MultiSelectMenu list={platformOptions} name="Platform" />
          </Grid>
          <Grid size={{xs:12,sm:6,md:"auto"}}>
            <MultiSelectMenu list={cashPayoutOptions} name="Cash Payout" />
          </Grid>
          <Grid size={{xs:12,sm:6,md:"auto"}}>
            <MultiSelectMenu list={postingDateOptions} name="Posting Date" />
          </Grid>
          <Grid size={{xs:12,sm:6,md:"auto"}}>
            <MultiSelectMenu list={locationOptions} name="Location" />
          </Grid>
          
          <Grid size={{xs:12,sm:6,md:"auto"}}>
            <Button
              variant="outlined"
              sx={{
                width:"100%",
                textTransform: "none",
                borderRadius: 2,
                backgroundColor: "white",
                color: "#383838",
                padding: "12px 24px",
                borderColor: "#E0E0E0",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Reset Filters <RestartAltIcon sx={{marginLeft:0.5}}/>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
