import styled from "styled-components";
import pokeData from "../data/pokemon.json";

const PokeCard = styled.article`
  background-color: #eee;
  color: #242424;
  max-width: 320px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  & img {
    image-rendering: pixelated;
  }
`;

export const Pokemon = () => (
  <PokeCard>
    <header>
      <img src={pokeData.sprites.front_default} alt={pokeData.name} />

      <h2>{pokeData.name}</h2>

      <p>
        H: {pokeData.height * 10} cm, W: {(pokeData.weight * 0.1).toFixed(1)} kg
      </p>
    </header>
    <p>{pokeData.description}</p>
  </PokeCard>
);
