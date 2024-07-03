import { useEffect, useState } from "react"
import CardList from "../components/CardList"

const CardContainer = () => {

    const [pokemonData, setPokemonData] = useState({})
    const [pokemonCards, setPokemonCards] = useState([])

    const fetchAllPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500')
        const data = await response.json()
        setPokemonData(data) // may be an issue
        setPokemonCards(data.results)
    }

    useEffect(() => {
        fetchAllPokemon()
    }, [])

    return(
        <CardList pokemonCards={pokemonCards} />
    )
}

export default CardContainer