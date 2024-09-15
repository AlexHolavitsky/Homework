// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form, Field } from 'react-final-form';
// import axios from 'axios';

// const MainPage = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const response = await axios.get('/db.json');
//         setDestinations(response.data.destinations || []);
//       } catch (error) {
//         setError('Failed to fetch destinations.');
//         console.error('Failed to fetch destinations:', error);
//       }
//     };

//     fetchDestinations();
//   }, []);

//   const onSubmit = async (values) => {
//     try {
//       localStorage.setItem('selectedDestination', values.destination);
//       await axios.post('/db.json', values); // Mock POST request
//       navigate('/hotels');
//     } catch (error) {
//       setError('Failed to submit form.');
//       console.error('Failed to submit form:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Booking Form</h1>
//       {error && <div className="error">{error}</div>}
//       <Form
//         onSubmit={onSubmit}
//         validate={(values) => {
//           const errors = {};
//           if (!values.destination) {
//             errors.destination = 'Required';
//           }
//           return errors;
//         }}
//         render={({ handleSubmit, submitting, pristine }) => (
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Destination</label>
//               <Field name="destination">
//                 {({ input, meta }) => (
//                   <div>
//                     <select {...input}>
//                       <option value="">Select...</option>
//                       {Array.isArray(destinations) && destinations.length > 0 ? (
//                         destinations.map((dest) => (
//                           <option key={dest} value={dest}>
//                             {dest}
//                           </option>
//                         ))
//                       ) : (
//                         <option value="">Loading...</option>
//                       )}
//                     </select>
//                     {meta.touched && meta.error && <span>{meta.error}</span>}
//                   </div>
//                 )}
//               </Field>
//             </div>
//             <button type="submit" disabled={submitting || pristine}>Send</button>
//           </form>
//         )}
//       />
//     </div>
//   );
// };

// export default MainPage;


import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Button, MenuItem, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [destinations, setDestinations] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Получаем список пунктов назначения из db.json
    axios.get('http://localhost:5000/destinations')
      .then(response => setDestinations(response.data))
      .catch(error => console.error('Ошибка при загрузке пунктов назначения:', error));
  }, []);

  const onSubmit = (values) => {
    // Отправляем запрос для получения списка отелей
    axios.post('http://localhost:5000/hotels', values)
      .then(response => {
        dispatch({ type: 'FETCH_HOTELS_SUCCESS', payload: response.data });
        navigate('/hotels');
      })
      .catch(error => console.error('Ошибка при отправке формы:', error));
  };

  const required = value => (value ? undefined : 'Required');

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4" align="center">Поиск отелей</Typography>
      </Grid>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} justifyContent="center">
              {/* Поле выбора пункта назначения */}
              <Grid item>
                <Field name="destination" validate={required}>
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      select
                      label="Destination"
                      variant="outlined"
                      error={meta.error && meta.touched}
                      helperText={meta.touched && meta.error}
                    >
                      {destinations.map((destination) => (
                        <MenuItem key={destination.id} value={destination.id}>
                          {destination.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                </Field>
              </Grid>

              {/* Поле выбора даты заезда */}
              <Grid item>
                <Field name="checkInDate" validate={required}>
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Check-in Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      error={meta.error && meta.touched}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>

              {/* Поле выбора даты выезда */}
              <Grid item>
                <Field name="checkOutDate" validate={required}>
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Check-out Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      error={meta.error && meta.touched}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>

              {/* Кнопка отправки формы */}
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Grid>
  );
};

export default MainPage;
