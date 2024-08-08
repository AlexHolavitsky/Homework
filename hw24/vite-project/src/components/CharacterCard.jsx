import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "700px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="../public/LukeSkywalker-insider217.webp"
            className="img-fluid rounded-start"
            alt={character.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text"><strong>Height:</strong> {character.height} cm</p>
            <p className="card-text"><strong>Mass:</strong> {character.mass} kg</p>
            <p className="card-text"><strong>Hair Color:</strong> {character.hair_color}</p>
            <p className="card-text"><strong>Skin Color:</strong> {character.skin_color}</p>
            <p className="card-text"><strong>Eye Color:</strong> {character.eye_color}</p>
            <p className="card-text"><strong>Birth Year:</strong> {character.birth_year}</p>
            <p className="card-text"><strong>Gender:</strong> {character.gender}</p>

            <a href={character.homeworld} className="btn btn-primary">
              View Homeworld
            </a>

            <h6>Films:</h6>
            <ul className="list-group">
              {character.films.map((film) => {
                // Виділяємо номер фільму з URL
                const filmNumber = film.match(/\/(\d+)\//)[1];
                return (
                  <li key={filmNumber} className="list-group-item">
                    <a href={film} target="_blank" rel="noopener noreferrer">
                      Film {filmNumber}
                    </a>
                  </li>
                );
              })}
            </ul>

            <p className="card-text"><strong>Species:</strong> {character.species}</p>

             <h6>Vehicles:</h6>
            <ul className="list-group">
              {character.vehicles.map((vehicle) => {
                // Виділяємо номер фільму з URL
                const vehicleNumber = vehicle.match(/\/(\d+)\//)[1];
                return (
                  <li key={vehicleNumber} className="list-group-item">
                    <a href={vehicle} target="_blank" rel="noopener noreferrer">
                    Vehicle {vehicleNumber}
                    </a>
                  </li>
                );
              })}
            </ul>

             <h6>Starships:</h6>
            <ul className="list-group">
              {character.starships.map((starship) => {
                // Виділяємо номер фільму з URL
                const starshipNumber = starship.match(/\/(\d+)\//)[1];
                return (
                  <li key={starshipNumber} className="list-group-item">
                    <a href={starship} target="_blank" rel="noopener noreferrer">
                    Starship {starshipNumber}
                    </a>
                  </li>
                );
              })}
            </ul>

            <p className="card-text"><strong>Created:</strong> {character.created}</p>
            <p className="card-text"><strong>Edited:</strong> {character.edited}</p>
            <p><strong>Url:</strong><a class="link-opacity-100" href="#">  {character.url}</a></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
