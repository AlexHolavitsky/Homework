

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
        label="Введите к примеру: https://swapi.py4e.com/api/people/1/"
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
        Добавить
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

