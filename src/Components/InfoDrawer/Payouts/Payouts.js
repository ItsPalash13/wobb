import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export default function Payouts() {
  const milestones = [
    {
      label: "Campaign Launch",
      description: "Kick-off the campaign by briefing all influencers and distributing content guidelines.",
    },
    {
      label: "Mid-Campaign Check",
      description: "Review campaign progress, engagement metrics, and provide feedback to influencers.",
    },
    {
      label: "Campaign Completion",
      description: "Finalize content submissions, collect performance analytics, and begin payout processing.",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: 4,
      }}
    >
      {/* Payouts Section Title */}
      <Typography
        sx={{
          fontWeight: 300,
          marginBottom: 1,
          fontSize: 40,
          letterSpacing: 1,
        }}
      >
        Payouts
      </Typography>

      {/* Payouts List */}
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
        {/* Payout Timeline */}
        <ListItem>
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Payout Timeline"
            secondary="All payouts will be processed within 7 working days after the campaign completion."
          />
        </ListItem>

        {/* Account Details */}
        <ListItem>
          <ListItemIcon>
            <InfoIcon color="secondary" />
          </ListItemIcon>
          <ListItemText
            primary="Account Details"
            secondary="Ensure that your account details are updated to avoid any delays in receiving your payment."
          />
        </ListItem>
      </List>

      <center>
        <Divider sx={{ margin: "16px 0", marginBottom: 7, width: "50%" }} />
      </center>

      {/* Milestone Section */}
      <Typography
        sx={{
          fontWeight: 300,
          marginBottom: 1,
          fontSize: 40,
          letterSpacing: 1,
        }}
      >
        Milestones
      </Typography>

      <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
        <Stepper orientation="vertical">
          {milestones.map((milestone, index) => (
            <Step key={index} active>
              <StepLabel>{milestone.label}</StepLabel>
              <StepContent sx={{textAlign:"left"}}>
                <Typography>{milestone.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <Paper
          square
          elevation={0}
          sx={{ p: 3, bgcolor: "background.default",textAlign:"left" }}
        
        >
          <Typography>
            All milestones successfully achieved will lead to smoother campaign execution and timely payouts!
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
