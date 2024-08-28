// // components/CharacterDetail.jsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCharacter } from '../store/swapiSlice';

// const CharacterDetail = ({ characterId }) => {
//   const dispatch = useDispatch();
//   const { character, status } = useSelector((state) => state.swapi);

//   useEffect(() => {
//     if (characterId) {
//       dispatch(fetchCharacter(characterId));
//     }
//   }, [dispatch, characterId]);

//   if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'failed') return <p>Error loading character</p>;

//   return (
//     <div>
//       {character && (
//         <div>
//           <h3>{character.name}</h3>
//           <p>Height: {character.height}</p>
//           <p>Mass: {character.mass}</p>
//           <p>Hair Color: {character.hair_color}</p>
//           <p>Skin Color: {character.skin_color}</p>
//           <p>Eye Color: {character.eye_color}</p>
//           <p>Birth Year: {character.birth_year}</p>
//           <p>Gender: {character.gender}</p>
//           <p>Homeworld: {character.homeworld}</p>
//           <p>Films: {character.films}</p>
//           <p>Species: {character.species}</p>
//           <p>Vehicles: {character.vehicles}</p>
//           <p>Starships: {character.starships}</p>
//           <p>Created: {character.created}</p>
//           <p>Edited: {character.edited}</p>
//           <p>Url: {character.url}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CharacterDetail;
