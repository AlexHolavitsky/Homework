// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchSwapiData } from '../redux/swapiSlice';

// const SwapiPage = () => {
//   const dispatch = useDispatch();
//   const swapiData = useSelector((state) => state.swapi);

//   useEffect(() => {
//     dispatch(fetchSwapiData());
//   }, [dispatch]);

//   return (
//     <div>
//       {swapiData.loading && <p>Loading...</p>}
//       {swapiData.error && <p>Error: {swapiData.error}</p>}
//       {swapiData.data && (
//         <div>
//           <h3>Name: {swapiData.data.name}</h3>
//           <p>Height: {swapiData.data.height}</p>
//           <p>Mass: {swapiData.data.mass}</p>
//           {/* Інші поля як у прикладі */}
//         </div>
//       )}
//     </div>
//   );
// };










// // export default SwapiPage;


// import React, { useState, useEffect } from 'react';
// import { TextField, Button, List, ListItem, ListItemText, Box } from '@mui/material';

// const SwapiPage = () => {
//   const [url, setUrl] = useState('');
//   const [dataList, setDataList] = useState(() => JSON.parse(localStorage.getItem('swapiData')) || []);

//   useEffect(() => {
//     localStorage.setItem('swapiData', JSON.stringify(dataList));
//   }, [dataList]);

//   const handleFetchData = async () => {
//     if (url) {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setDataList([...dataList, data]);
//         setUrl(''); // Очищуємо поле введення після запиту
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//   };

//   const handleClearData = () => {
//     setDataList([]);
//     localStorage.removeItem('swapiData'); // Очищаємо localStorage
//   };

//   return (
//     <Box>
//       <TextField
//         label="SWAPI URL"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <Button variant="contained" onClick={handleFetchData} sx={{ mb: 2 }}>
//         Fetch Data
//       </Button>
      
//       <List>
//         {dataList.map((data, index) => (
//           <ListItem key={index} divider>
//             <ListItemText
//               primary={`Name: ${data.name || 'N/A'}`}
//               secondary={
//                 <>
//                   <p>Height: {data.height || 'N/A'}</p>
//                   <p>Mass: {data.mass || 'N/A'}</p>
//                   <p>Hair Color: {data.hair_color || 'N/A'}</p>
//                   <p>Skin Color: {data.skin_color || 'N/A'}</p>
//                   <p>Eye Color: {data.eye_color || 'N/A'}</p>
//                   <p>Birth Year: {data.birth_year || 'N/A'}</p>
//                   <p>Gender: {data.gender || 'N/A'}</p>
//                 </>
//               }
//             />
//           </ListItem>
//         ))}
//       </List>
      
//       <Button variant="outlined" color="secondary" onClick={handleClearData}>
//         Clear All Data
//       </Button>
//     </Box>
//   );
// };

// export default SwapiPage;






// import React, { useState, useEffect } from 'react';
// import { TextField, Button, List, ListItem, ListItemText, Box } from '@mui/material';

// const SwapiPage = () => {
//   const [url, setUrl] = useState('');  // поле для введення URL
//   const [dataList, setDataList] = useState(() => JSON.parse(localStorage.getItem('swapiData')) || []);

//   // Виконуємо запит за замовчуванням під час завантаження компонента
//   useEffect(() => {
//     const defaultUrl = 'https://swapi.py4e.com/api/people/1';
    
//     const fetchDefaultData = async () => {
//       try {
//         const response = await fetch(defaultUrl);
//         const data = await response.json();
//         setDataList([...dataList, data]);
//       } catch (error) {
//         console.error('Error fetching default data:', error);
//       }
//     };

//     // Якщо список порожній, робимо запит за замовчуванням
//     if (dataList.length === 0) {
//       fetchDefaultData();
//     }
//   }, []);

//   // Збереження даних у localStorage при зміні списку
//   useEffect(() => {
//     localStorage.setItem('swapiData', JSON.stringify(dataList));
//   }, [dataList]);

//   // Запит при введенні URL
//   const handleFetchData = async () => {
//     if (url) {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setDataList([...dataList, data]);
//         setUrl(''); // Очищення поля введення
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//   };

//   // Очищення даних
//   const handleClearData = () => {
//     setDataList([]);
//     localStorage.removeItem('swapiData'); // Очищення localStorage
//   };

//   return (
//     <Box>
//       <TextField
//         label="SWAPI URL"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <Button variant="contained" onClick={handleFetchData} sx={{ mb: 2 }}>
//         Fetch Data
//       </Button>
      
//       <List>
//         {dataList.map((data, index) => (
//           <ListItem key={index} divider>
//             <ListItemText
//               primary={`Name: ${data.name || 'N/A'}`}
//               secondary={
//                 <>
//                   <p>Height: {data.height || 'N/A'}</p>
//                   <p>Mass: {data.mass || 'N/A'}</p>
//                   <p>Hair Color: {data.hair_color || 'N/A'}</p>
//                   <p>Skin Color: {data.skin_color || 'N/A'}</p>
//                   <p>Eye Color: {data.eye_color || 'N/A'}</p>
//                   <p>Birth Year: {data.birth_year || 'N/A'}</p>
//                   <p>Gender: {data.gender || 'N/A'}</p>
             

//                 </>
//               }
//             />
//           </ListItem>
//         ))}
//       </List>
      
//       <Button variant="outlined" color="secondary" onClick={handleClearData}>
//         Clear All Data
//       </Button>
//     </Box>
//   );
// };

// export default SwapiPage;





import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Card, CardContent, Stack, List, ListItem, Divider } from '@mui/material';

const SwapiPage = () => {
  const [url, setUrl] = useState('');
  const [dataList, setDataList] = useState(() => JSON.parse(localStorage.getItem('swapiData')) || []);

  useEffect(() => {
    const defaultUrl = 'https://swapi.py4e.com/api/people/1';
    
    const fetchDefaultData = async () => {
      try {
        const response = await fetch(defaultUrl);
        const data = await response.json();
        setDataList([...dataList, data]);
      } catch (error) {
        console.error('Error fetching default data:', error);
      }
    };

    if (dataList.length === 0) {
      fetchDefaultData();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('swapiData', JSON.stringify(dataList));
  }, [dataList]);

  const handleFetchData = async () => {
    if (url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDataList([...dataList, data]);
        setUrl('');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const handleClearData = () => {
    setDataList([]);
    localStorage.removeItem('swapiData');
  };

  return (
    <Container style={{ padding: '16px' }}>
      <TextField
        label="SWAPI URL"
        variant="outlined"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <Button
        onClick={handleFetchData}
        variant="contained"
        color="primary"
        style={{ marginBottom: '16px' }}
      >
        Fetch Data
      </Button>

      {dataList.map((data, index) => (
        <Card key={index} style={{ marginBottom: '16px' }}>
          <CardContent>
            <Stack spacing={2}>
              <List>
                <ListItem > Name: {data.name || 'N/A'} </ListItem>
                <ListItem>Height: {data.height || 'N/A'}</ListItem>
                <ListItem>Mass: {data.mass || 'N/A'}</ListItem>
                <ListItem>Hair Color: {data.hair_color || 'N/A'}</ListItem>
                <ListItem>Skin Color: {data.skin_color || 'N/A'}</ListItem>
                <ListItem>Eye Color: {data.eye_color || 'N/A'}</ListItem>
                <ListItem>Birth Year: {data.birth_year || 'N/A'}</ListItem>
                <ListItem>Gender: {data.gender || 'N/A'}</ListItem>
              </List>            
              <div>
                <strong>Films:</strong>
                {Array.isArray(data.films) && data.films.length > 0 ? (
                  <List>
                    {data.films.map((filmUrl, idx) => (
                      <ListItem key={idx}>{filmUrl}</ListItem>
                    ))}
                  </List>
                ) : (
                  <p>No films available</p>
                )}
              </div>
              <div>
                <strong>Species:</strong>
                {Array.isArray(data.species) && data.species.length > 0 ? (
                  <List>
                    {data.species.map((speciesUrl, idx) => (
                      <ListItem key={idx}>{speciesUrl}</ListItem>
                    ))}
                  </List>
                ) : (
                  <p>No species available</p>
                )}
              </div>
              <div>
                <strong>Vehicles:</strong>
                {Array.isArray(data.vehicles) && data.vehicles.length > 0 ? (
                  <List>
                    {data.vehicles.map((vehicleUrl, idx) => (
                      <ListItem key={idx}>{vehicleUrl}</ListItem>
                    ))}
                  </List>
                ) : (
                  <p>No vehicles available</p>
                )}
              </div>
              <div>
                <strong>Starships:</strong>
                {Array.isArray(data.starships) && data.starships.length > 0 ? (
                  <List>
                    {data.starships.map((starshipUrl, idx) => (
                      <ListItem key={idx}>{starshipUrl}</ListItem>
                    ))}
                  </List>
                ) : (
                  <p>No starships available</p>
                )}
              </div>
              <div>
                <strong>Created:</strong> {data.created || 'N/A'}
              </div>
              <div>
                <strong>Edited:</strong> {data.edited || 'N/A'}
              </div>
              <div>
                <strong>Url:</strong> {data.url || 'N/A'}
              </div>
            </Stack>
          </CardContent>
        </Card>
      ))}

      <Button
        onClick={handleClearData}
        variant="outlined"
        color="secondary"
        style={{ marginTop: '16px' }}
      >
        Clear All Data
      </Button>
    </Container>
  );
};

export default SwapiPage;

