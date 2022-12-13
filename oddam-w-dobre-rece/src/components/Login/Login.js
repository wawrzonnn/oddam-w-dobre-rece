import React, { useEffect, useState } from "react";

const API = "https://pokeapi.co/api/v2/pokemon";
const handleError = (err) => {
  console.log("Oops...");
  console.error(err);
};

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Not ok...");
      }

      const { results } = await response.json();
      console.log(results);
      setPokemon(results);
    };
    getPokemon().catch(handleError);
  }, []);

  if (!pokemon.length) return <p>loading...</p>;

  return (
    <div>
      {pokemon.map(({ name, url }) => (
        <div key={name}>
          <a href={url}>{name}</a>
        </div>
      ))}
    </div>
  );
}