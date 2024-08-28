
import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <h3>Name: {todo.name}</h3>
            <p>Height: {todo.height}</p>
            <p>Mass: {todo.mass}</p>
            <p>Hair Color: {todo.hair_color}</p>
            <p>Skin Color: {todo.skin_color}</p>
            <p>Eye Color: {todo.eye_color}</p>
            <p>Birth Year: {todo.birth_year}</p>
            <p>Gender: {todo.gender}</p>

            <p>Films:</p>
            {todo.films && todo.films.length > 0 ? (
              <ul>
                {todo.films.map((film, idx) => (
                  <li key={idx}>{film}</li>
                ))}
              </ul>
            ) : (
              <p>No films available</p>
            )}

            <p>Species:</p>
            {todo.films && todo.species.length > 0 ? (
              <ul>
                {todo.species.map((species, idx) => (
                  <li key={idx}>{species}</li>
                ))}
              </ul>
            ) : (
              <p>No species available</p>
            )}

            <p>Vehicles:</p>
            {todo.vehicles && todo.vehicles.length > 0 ? (
              <ul>
                {todo.vehicles.map((vehicles, idx) => (
                  <li key={idx}>{vehicles}</li>
                ))}
              </ul>
            ) : (
              <p>No vehicles available</p>
            )}

            <p>Starships:</p>
            {todo.starships && todo.starships.length > 0 ? (
              <ul>
                {todo.starships.map((starships, idx) => (
                  <li key={idx}>{starships}</li>
                ))}
              </ul>
            ) : (
              <p>No starships available</p>
            )}

           <p>Created: {todo.created}</p>
           <p>Edited: {todo.edited}</p>
           <p>Url: {todo.url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

