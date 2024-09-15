
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
        
//         // Check if the response is okay
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

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


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});
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

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  const handleAdultsChange = (change) => {
    setAdults(prev => Math.max(1, prev + change));
  };

  const handleChildrenChange = (change) => {
    setChildren(prev => Math.max(0, prev + change));
  };

  const validateForm = () => {
    const errors = {};
    if (!selectedCity) errors.city = 'City is required';
    if (!checkInDate) errors.checkInDate = 'Check-in date is required';
    if (!checkOutDate) errors.checkOutDate = 'Check-out date is required';
    if (new Date(checkInDate) >= new Date(checkOutDate)) errors.dateRange = 'Check-out date must be after check-in date';
    return errors;
  };

  const handleSearch = () => {
    const errors = validateForm();
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    navigate(`/hotels?city=${selectedCity}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&adults=${adults}&children=${children}`);
  };

  if (loading) return <p>Loading destinations...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Main Page</h1>
      <form>
        <label htmlFor="city">Select a city:</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {destinations.map(destination => (
            <option key={destination.id} value={destination.name}>
              {destination.label}
            </option>
          ))}
        </select>
        {formErrors.city && <p style={{ color: 'red' }}>{formErrors.city}</p>}
        
        <label htmlFor="checkInDate">Check-in date:</label>
        <input type="date" id="checkInDate" value={checkInDate} onChange={handleCheckInDateChange} />
        {formErrors.checkInDate && <p style={{ color: 'red' }}>{formErrors.checkInDate}</p>}
        
        <label htmlFor="checkOutDate">Check-out date:</label>
        <input type="date" id="checkOutDate" value={checkOutDate} onChange={handleCheckOutDateChange} />
        {formErrors.checkOutDate && <p style={{ color: 'red' }}>{formErrors.checkOutDate}</p>}
        {formErrors.dateRange && <p style={{ color: 'red' }}>{formErrors.dateRange}</p>}
        
        <div>
          <label>Adults:</label>
          <button type="button" onClick={() => handleAdultsChange(-1)}>-</button>
          <span>{adults}</span>
          <button type="button" onClick={() => handleAdultsChange(1)}>+</button>
        </div>
        
        <div>
          <label>Children:</label>
          <button type="button" onClick={() => handleChildrenChange(-1)}>-</button>
          <span>{children}</span>
          <button type="button" onClick={() => handleChildrenChange(1)}>+</button>
        </div>
        
        <button type="button" onClick={handleSearch}>Find Hotels</button>
      </form>
    </div>
  );
};

export default MainPage;
