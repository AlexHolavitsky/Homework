
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import SwapiPage from './pages/SwapiPage';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import Footer from './components/Footer';  

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <AppBar position="sticky">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/todo">TODO</Button>
          <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
        </Toolbar>
      </AppBar>
      
      <Container sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/swapi" element={<SwapiPage />} />
        </Routes>
      </Container>      
 
      <Footer ></Footer> 
    </Box>
  );
};

export default App;





