// // // import React from 'react';
// // // import { useSelector } from 'react-redux';
// // // import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// // // const HotelsPage = () => {
// // //   const hotels = useSelector(state => state.hotels);

// // //   return (
// // //     <TableContainer component={Paper}>
// // //       <Typography variant="h4" align="center" gutterBottom>
// // //         Список отелей
// // //       </Typography>
// // //       <Table>
// // //         <TableHead>
// // //           <TableRow>
// // //             <TableCell>Название</TableCell>
// // //             <TableCell>Адрес</TableCell>
// // //             <TableCell>Город</TableCell>
// // //             <TableCell>Телефон</TableCell>
// // //           </TableRow>
// // //         </TableHead>
// // //         <TableBody>
// // //           {hotels.map((hotel) => (
// // //             <TableRow key={hotel.id}>
// // //               <TableCell>{hotel.name}</TableCell>
// // //               <TableCell>{hotel.address}</TableCell>
// // //               <TableCell>{hotel.city}</TableCell>
// // //               <TableCell>{hotel.phone}</TableCell>
// // //             </TableRow>
// // //           ))}
// // //         </TableBody>
// // //       </Table>
// // //     </TableContainer>
// // //   );
// // // };

// // // export default HotelsPage;


// // import React, { useEffect, useState } from 'react';

// // const HotelsPage = () => {
// //   const [hotels, setHotels] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Функция для получения выбранного направления (например, по ID)
// //   const fetchDestinations = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5001/destinations');
// //       const data = await response.json();
// //       return data; // Предполагается, что это массив объектов
// //     } catch (err) {
// //       console.error('Error fetching destinations:', err);
// //       setError(err);
// //       return [];
// //     }
// //   };

// //   // Функция для получения отелей по выбранному параметру
// //   const fetchHotels = async (destinationId) => {
// //     try {
// //       const response = await fetch(`http://localhost:5001/hotels?destinationId=${destinationId}`);
// //       const data = await response.json();
// //       setHotels(data);
// //       setLoading(false);
// //     } catch (err) {
// //       console.error('Error fetching hotels:', err);
// //       setError(err);
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     const loadData = async () => {
// //       const destinations = await fetchDestinations();
      
// //       // Например, используем ID первого направления для запроса отелей
// //       if (destinations.length > 0) {
// //         const destinationId = destinations[0].id;
// //         fetchHotels(destinationId);
// //       } else {
// //         setLoading(false);
// //       }
// //     };

// //     loadData();
// //   }, []);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error.message}</p>;

// //   return (
// //     <div>
// //       <h1>Hotels</h1>
// //       {hotels.length > 0 ? (
// //         <ul>
// //           {hotels.map(hotel => (
// //             <li key={hotel.id}>{hotel.name}</li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No hotels found.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default HotelsPage;




// // HotelsPage.jsx
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const HotelsPage = () => {
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();

//   // Function to get the query parameter value
//   const getQueryParams = () => {
//     const params = new URLSearchParams(location.search);
//     return params.get('destination');
//   };

//   const fetchHotels = async (destination) => {
//     try {
//       const response = await fetch(`http://localhost:5001/hotels?destination=${destination}`);
//       const data = await response.json();
//       setHotels(data);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching hotels:', err);
//       setError(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const destination = getQueryParams();
//     if (destination) {
//       fetchHotels(destination);
//     } else {
//       setLoading(false);
//     }
//   }, [location.search]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>Hotels in {getQueryParams()}</h1>
//       {hotels.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Address</th>
//               <th>Price</th>
//               {/* Add more columns as needed */}
//             </tr>
//           </thead>
//           <tbody>
//             {hotels.map(hotel => (
//               <tr key={hotel.id}>
//                 <td>{hotel.name}</td>
//                 <td>{hotel.address}</td>
//                 <td>{hotel.price}</td>
//                 {/* Add more cells as needed */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No hotels found.</p>
//       )}
//     </div>
//   );
// };

// export default HotelsPage;

// /// HotelsPage.jsx
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const HotelsPage = () => {
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();

//   const getQueryParams = () => {
//     const params = new URLSearchParams(location.search);
//     return params.get('destination');
//   };

//   const fetchHotels = async (destination) => {
//     try {
//       const response = await fetch(`http://localhost:5001/hotels?destination=${destination}`);
      
//       // Check if the response is okay
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       // Check if the response is JSON
//       const contentType = response.headers.get('Content-Type');
//       if (!contentType || !contentType.includes('application/json')) {
//         throw new Error('Expected JSON response');
//       }

//       const data = await response.json();
//       setHotels(data);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error fetching hotels:', err);
//       setError(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const destination = getQueryParams();
//     if (destination) {
//       fetchHotels(destination);
//     } else {
//       setLoading(false);
//     }
//   }, [location.search]);

//   if (loading) return <p>Loading hotels...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>Hotels in {getQueryParams()}</h1>
//       {hotels.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>  
//               <th>Name</th>
//               <th>Address</th>
//               <th>City</th>
//               {/* <th>state</th>
//               <th>country_code</th>
//               <th>hotel_rating</th> */}
            


    
//               {/* Add more columns as needed */}
//             </tr>
//           </thead>
//           <tbody>
//             {hotels.map(hotel => (
//               <tr key={hotel.id}>
//                 <td>{hotel.id}</td>
//                 <td>{hotel.name}</td>
//                 <td>{hotel.address}</td>
//                 <td>{hotel.city}</td>
//                 {/* <td>{hotel.state}</td>
//                 <td>{hotel.country_code}</td>
//                 <td>{hotel.hotel_rating}</td> */}


//                 {/* Add more cells as needed */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No hotels found.</p>
//       )}
//     </div>
//   );
// };

// export default HotelsPage;

// HotelsPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return params.get('city');
  };

  const fetchHotels = async (city) => {
    try {
      const response = await fetch(`http://localhost:5001/hotels?city=${city}`);
      
      // Check if the response is okay
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Expected JSON response');
      }

      const data = await response.json();
      setHotels(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching hotels:', err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const city = getQueryParams();
    if (city) {
      fetchHotels(city);
    } else {
      setLoading(false);
    }
  }, [location.search]);

  if (loading) return <p>Loading hotels...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Hotels in {getQueryParams()}</h1>
      {hotels.length > 0 ? (
        <table>
          <thead>
            <tr>
            <th>id</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Code</th>
              <th>Rate</th>
              <th>Phone</th>
              <th>Website</th>      
            </tr>
          </thead>
          <tbody>
            {hotels.map(hotel => (
              <tr key={hotel.id}>
                 <td>{hotel.id}</td>
                <td>{hotel.name}</td>
                <td>{hotel.address}</td>
                <td>{hotel.city}</td>
                <td>{hotel.state}</td>
                <td>{hotel.country_code}</td>
                <td>{hotel.hotel_rating}</td>
                <td>{hotel.phone_number}</td>
                <td>{hotel.website}</td>             
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hotels found.</p>
      )}
    </div>
  );
};

export default HotelsPage;
