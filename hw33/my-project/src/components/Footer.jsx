import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '20px', 
        backgroundColor: '#3f51b5', 
        color: 'white',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body1">
        Contact me: 
        <Link href="mailto:alex65870@gmail.com" color="inherit" sx={{ marginLeft: '10px' }}>
        alex65870@gmail.com
        </Link> | 
        <Link href="https://www.google.ru/search?hl=ru&q=linkedin" target="_blank" color="inherit" sx={{ marginLeft: '10px' }}>
          LinkedIn
        </Link> | 
        <Link href="https://github.com/AlexHolavitsky" target="_blank" color="inherit" sx={{ marginLeft: '10px' }}>
          GitHub
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
