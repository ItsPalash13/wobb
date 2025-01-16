import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';

import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

import '@fontsource/poppins/700.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#EDEDED',
  '&:hover': {
    backgroundColor: 'rgba(247, 247, 247, 1)',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: 'rgba(135, 134, 142, 1)',
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'rgba(135, 134, 142, 1)',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
}));

export default function SearchAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative" sx={{ boxShadow: 'none', background: 'none' }}>
          <Toolbar>
            {/* Left Section (Logo and Name) */}
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar
                sx={{display:{xs:"none",sm:"block",md:"block"}}}
                alt="Wobb"
                src="https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6716c18e45760446b740a3b6_logo%2520final%2520one%25205-p-500.png"
              />
              <Typography
                noWrap
                component="div"
                color="#080C51"
                sx={{ fontWeight: 750, fontSize: 30, fontFamily: 'Poppins, Arial, sans-serif',display:{xs:"none",sm:"block",md:"block"} }}
              >
                Wobb
              </Typography>
            </Box>
  
            {/* Center Section (Navigation Links) */}
            <Box
              sx={{
                flexGrow: 1,
                display: {xs:"none", sm: 'none', md: 'flex' },
                justifyContent: 'left',
                gap: 4, // Space between links
                paddingLeft:4,
                paddingTop:0.5,
              }}
            >
              {['Campaigns', 'Wobble', 'Messages'].map((text, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: index === 0 ? '#080C51' : '#383838',
                    fontWeight: index === 0 ? 600:500,
                    fontSize: 16,
                    cursor: 'pointer',
                    '&:hover': { color: '#080C51' },
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
  
            {/* Right Section */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              gap={2}
              sx={{ flexGrow: 0,width:{xs:"100%"} }}
            >
              {/* Search Input */}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
  
              {/* Icons and Avatar */}
              <Box display="flex" alignItems="center" gap={2}>
                <CalendarMonthOutlinedIcon sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }} />
                <ContactSupportOutlinedIcon sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }} />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://media.cnn.com/api/v1/images/stellar/prod/160724164501-kristin-rowe-finkbeiner-headshot.jpg?q=w_256,c_fill"
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  