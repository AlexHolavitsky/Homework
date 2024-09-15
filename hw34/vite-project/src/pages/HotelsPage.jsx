
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const HotelsPage = () => {
//   const [hotels, setHotels] = useState([]);
//   const [destination, setDestination] = useState('');

//   useEffect(() => {
//     const fetchHotels = async () => {
//       const response = await axios.get('/db.json');
//       setHotels(response.data.hotels.filter(hotel => hotel.destination === destination));
//     };

//     // Assuming destination is passed via localStorage or some other method
//     const selectedDestination = localStorage.getItem('selectedDestination') || '';
//     setDestination(selectedDestination);
//     fetchHotels();
//   }, [destination]);

//   return (
//     <div>
//       <h1>Hotels</h1>
//       <ul>
//         {hotels.map((hotel) => (
//           <li key={hotel.id}>{hotel.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HotelsPage;


import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const HotelsPage = () => {
  const hotels = useSelector(state => state.hotels);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" align="center" gutterBottom>
        Список отелей
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Адрес</TableCell>
            <TableCell>Город</TableCell>
            <TableCell>Телефон</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hotels.map((hotel) => (
            <TableRow key={hotel.id}>
              <TableCell>{hotel.name}</TableCell>
              <TableCell>{hotel.address}</TableCell>
              <TableCell>{hotel.city}</TableCell>
              <TableCell>{hotel.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HotelsPage;
