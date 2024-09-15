// // import React, { useEffect, useState } from 'react';
// // import { Form, Field } from 'react-final-form';
// // import { TextField, Button, MenuItem, Grid, Typography } from '@mui/material';
// // import axios from 'axios';
// // import { useDispatch } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';

// // const MainPage = () => {
// //   const [destinations, setDestinations] = useState([]);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     axios.get('http://localhost:5001/destinations')
// //       .then(response => setDestinations(response.data))
// //       .catch(error => console.error('Ошибка при загрузке пунктов назначения:', error));
// //   }, []);

// //   const onSubmit = (values) => {
// //     axios.post('http://localhost:5000/hotels', values)
// //       .then(response => {
// //         dispatch({ type: 'FETCH_HOTELS_SUCCESS', payload: response.data });
// //         navigate('/hotels');
// //       })
// //       .catch(error => console.error('Ошибка при отправке формы:', error));
// //   };

// //   const required = value => (value ? undefined : 'Required');

// //   return (
// //     <Grid container direction="column" alignItems="center" spacing={2}>
// //       <Grid item>
// //         <Typography variant="h4" align="center">Поиск отелей</Typography>
// //       </Grid>
// //       <Form
// //         onSubmit={onSubmit}
// //         render={({ handleSubmit }) => (
// //           <form onSubmit={handleSubmit}>
// //             <Grid container spacing={3} justifyContent="center">
// //               {/* Поле выбора пункта назначения */}
// //               <Grid item>
// //                 <Field name="destination" validate={required}>
// //                   {({ input, meta }) => (
// //                     <TextField
// //                       {...input}
// //                       select
// //                       label="Destination"
// //                       variant="outlined"
// //                       error={meta.error && meta.touched}
// //                       helperText={meta.touched && meta.error}
// //                     >
// //                       {destinations.map((destination) => (
// //                         <MenuItem key={destination.id} value={destination.id}>
// //                           {destination.label}
// //                         </MenuItem>
// //                       ))}
// //                     </TextField>
// //                   )}
// //                 </Field>
// //               </Grid>

// //               {/* Поле выбора даты заезда */}
// //               <Grid item>
// //                 <Field name="checkInDate" validate={required}>
// //                   {({ input, meta }) => (
// //                     <TextField
// //                       {...input}
// //                       label="Check-in Date"
// //                       type="date"
// //                       InputLabelProps={{
// //                         shrink: true,
// //                       }}
// //                       variant="outlined"
// //                       error={meta.error && meta.touched}
// //                       helperText={meta.touched && meta.error}
// //                     />
// //                   )}
// //                 </Field>
// //               </Grid>

// //               {/* Поле выбора даты выезда */}
// //               <Grid item>
// //                 <Field name="checkOutDate" validate={required}>
// //                   {({ input, meta }) => (
// //                     <TextField
// //                       {...input}
// //                       label="Check-out Date"
// //                       type="date"
// //                       InputLabelProps={{
// //                         shrink: true,
// //                       }}
// //                       variant="outlined"
// //                       error={meta.error && meta.touched}
// //                       helperText={meta.touched && meta.error}
// //                     />
// //                   )}
// //                 </Field>
// //               </Grid>

// //               {/* Кнопка отправки формы */}
// //               <Grid item>
// //                 <Button type="submit" variant="contained" color="primary">
// //                   Submit
// //                 </Button>
// //               </Grid>
// //             </Grid>
// //           </form>
// //         )}
// //       />
// //     </Grid>
// //   );
// // };

// // export default MainPage;


// // MainPage.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const MainPage = () => {
//   const [selectedDestination, setSelectedDestination] = useState('');
//   const navigate = useNavigate();

//   const handleDestinationChange = (event) => {
//     setSelectedDestination(event.target.value);
//   };

//   const handleSearch = () => {
//     navigate(`/hotels?destination=${selectedDestination}`);
//   };

//   return (
//     <div>
//       <h1>Main Page</h1>
//       <select value={selectedDestination} onChange={handleDestinationChange}>
//         <option value="">Select a destination</option>
//         <option value="Paris">Paris</option>
//         <option value="London">London</option>
//         <option value="Boston">Boston</option>
//         {/* Add more options as needed */}
//       </select>
//       <button onClick={handleSearch}>Find Hotels</button>
//     </div>
//   );
// };

// export default MainPage;


// // MainPage.jsx
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const MainPage = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [selectedDestination, setSelectedDestination] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const response = await fetch('http://localhost:5001/destinations');
        
//         // Check if the response is okay
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         // Check if the response is JSON
//         const contentType = response.headers.get('Content-Type');
//         if (!contentType || !contentType.includes('application/json')) {
//           throw new Error('Expected JSON response');
//         }

//         const data = await response.json();
//         setDestinations(data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching destinations:', err);
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchDestinations();
//   }, []);

//   const handleDestinationChange = (event) => {
//     setSelectedDestination(event.target.value);
//   };

//   const handleSearch = () => {
//     navigate(`/hotels?destination=${selectedDestination}`);
//   };

//   if (loading) return <p>Loading destinations...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>Main Page</h1>
//       <select value={selectedDestination} onChange={handleDestinationChange}>
//         <option value="">Select a destination</option>
//         {destinations.map(destination => (
//           <option key={destination.id} value={destination.label}>
//             {destination.label}
//           </option>
//         ))}
   
//       </select>
//       <button onClick={handleSearch}>Find Hotels</button>
//     </div>
//   );
// };

// export default MainPage;


// MainPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:5001/destinations');
        
        // Check if the response is okay
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Expected JSON response');
        }

        const data = await response.json();
        setDestinations(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching destinations:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/hotels?city=${selectedCity}`);
  };

  if (loading) return <p>Loading destinations...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Main Page</h1>
      <label htmlFor="city">Select a city:</label>
      <select id="city" value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {destinations.map(destination => (
          <option key={destination.id} value={destination.name}>
            {destination.label}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Find Hotels</button>
    </div>
  );
};

export default MainPage;



// MainPage.jsx
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const MainPage = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [selectedCity, setSelectedCity] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const response = await fetch('http://localhost:5001/destinations');
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const contentType = response.headers.get('Content-Type');
//         if (!contentType || !contentType.includes('application/json')) {
//           throw new Error('Expected JSON response');
//         }

//         const data = await response.json();
        
//         // Use a Set to remove duplicates
//         const uniqueDestinations = Array.from(new Set(data.map(destination => destination.name)))
//           .map(name => {
//             return data.find(destination => destination.name === name);
//           });

//         setDestinations(uniqueDestinations);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching destinations:', err);
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchDestinations();
//   }, []);

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   const handleSearch = () => {
//     navigate(`/hotels?city=${selectedCity}`);
//   };

//   if (loading) return <p>Loading destinations...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>Main Page</h1>
//       <label htmlFor="city">Select a city:</label>
//       <select id="city" value={selectedCity} onChange={handleCityChange}>
//         <option value="">Select a city</option>
//         {destinations.map(destination => (
//           <option key={destination.id} value={destination.name}>
//             {destination.label}
//           </option>
//         ))}
//       </select>
//       <button onClick={handleSearch}>Find Hotels</button>
//     </div>
//   );
// };

// export default MainPage;


