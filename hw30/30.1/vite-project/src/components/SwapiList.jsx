
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchStarWarsData } from '../store/swapiSlice';

// const SwapiList = () => {
//   const dispatch = useDispatch();
//   const { entities, status } = useSelector((state) => state.swapi);

//   useEffect(() => {
//     dispatch(fetchStarWarsData());
//   }, [dispatch]);

//   return (
//     <div>
//       <h3>Star Wars Characters</h3>
//       {status === 'loading' && <p>Loading...</p>}
//       {status === 'failed' && <p>Error loading data</p>}
//       {status === 'succeeded' && (
//         <ul>
//           {entities.map((character, index) => (
//             <li key={index}>{character.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SwapiList;
