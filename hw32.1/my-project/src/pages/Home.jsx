import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Typography variant="h2"> Олесандр Холявіцький </Typography>
      <Typography variant="h5">Навички</Typography>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Інші навички</li>
      </ul>
      <Typography variant="h5">Вік:</Typography>
      <p> 32 роки</p>
      <Typography variant="h5">Досвід</Typography>
      <p>10 років</p>
      <Typography variant="h5">Освіта</Typography>
      <p>Вища, Магістр з фінанси та кредит  </p>
    </Box>
  );
};

export default Home;
