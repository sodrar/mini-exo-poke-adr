import { useState } from "react"

export function App({ pokemons }) {
  // Vous possédez un tableau de 100 pokémons en prop.
  // Vous pouvez commencez à coder ici.
  // les stats d'attaque se trouvent dans stats.attack

  const [maxAttack, setMaxAttack] = useState(50)
  const [pokEmons, setPokEmons] = useState([...pokemons])

  // filtered by attack, sorted by name and by alphabetical order
  const pokeFilteredSorted = [...pokEmons]
    .filter(pokemon => pokemon.stats.attack < maxAttack)
    .sort((a, b) => b.stats.attack - a.stats.attack)
    .sort((a,b) => a.name - b.name)

  const pokeElements = pokeFilteredSorted.map(pokemon => {
    return <div>
      <h2>{pokemon.name}</h2>
      <h2>{pokemon.stats.attack}</h2>
    </div>
  })



  return (
    <>
      <div>
        <input type="range" value={maxAttack} onInput={e => setMaxAttack(e.target.value)} min={0} max={140} />
      </div>
      <ul>
        {pokeElements.map((pokemon, i) => {
          return <li key={i}>
            {pokemon}
          </li>
        })}
      </ul>
    </>
  )
}
