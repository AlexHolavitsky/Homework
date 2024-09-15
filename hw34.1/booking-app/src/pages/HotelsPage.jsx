
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const HotelsPage = () => {
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();

//   const getQueryParams = () => {
//     const params = new URLSearchParams(location.search);
//     return params.get('city');
//   };

//   const fetchHotels = async (city) => {
//     try {
//       const response = await fetch(`http://localhost:5001/hotels?city=${city}`);
      
//       // Check if the response is okay
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

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
//     const city = getQueryParams();
//     if (city) {
//       fetchHotels(city);
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
//             <th>id</th>
//               <th>Name</th>
//               <th>Address</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Code</th>
//               <th>Rate</th>
//               <th>Phone</th>
//               <th>Website</th>      
//             </tr>
//           </thead>
//           <tbody>
//             {hotels.map(hotel => (
//               <tr key={hotel.id}>
//                  <td>{hotel.id}</td>
//                 <td>{hotel.name}</td>
//                 <td>{hotel.address}</td>
//                 <td>{hotel.city}</td>
//                 <td>{hotel.state}</td>
//                 <td>{hotel.country_code}</td>
//                 <td>{hotel.hotel_rating}</td>
//                 <td>{hotel.phone_number}</td>
//                 <td>{hotel.website}</td>             
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

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import  './MainPage.css';

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
      <div className="hotels-grid">
        {hotels.length > 0 ? (
          hotels.map(hotel => (
            <div key={hotel.id} className="hotel-card">
              <img 
                src={hotel.photoUrl} 
                alt={hotel.name} 
                className="hotel-photo"
              />
              <div className="hotel-details">
                <h2>{hotel.name}</h2>
                <p>{hotel.address}</p>
                <p>{hotel.city}</p>
                <p>Rating: {hotel.hotel_rating}</p>
                <p>
                  <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                    {hotel.website}
                  </a>
                </p>
                <p>{hotel.phone_number}</p>
                <p>{hotel.country_code}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels found.</p>
        )}
      </div>
    </div>
  );
};

export default HotelsPage;
