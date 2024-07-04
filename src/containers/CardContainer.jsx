import { useEffect, useState } from "react"
import CardList from "../components/CardList"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/Home'
import GameContainer from '../containers/GameContainer'
import Navigation from '../components/Navigation'
import CardDetails from '../components/CardDetails'


const CardContainer = () => {

    
    const [pokemonCards, setPokemonCards] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchAllPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
        const data = await response.json()
        console.log(data);
        setPokemonCards(data.results)
    }

    const fetchPokemonDetails = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log("pokemon data", data);
        return data
    }

    const fetchAllPokemonDetails = async () => {
        
        pokemonCards.forEach(async (pokemon, i) => {
            console.log(pokemonCards);
            const details = await fetchPokemonDetails(pokemon.url)
            const cardsCopy = [...pokemonCards]
            cardsCopy[i].details = details
            setPokemonCards(cardsCopy)
        })
    }

    useEffect(() => {
        fetchAllPokemon()
    }, [])

    useEffect(() => {
        console.log(loading);
        if (loading || pokemonCards.length <= 0) return;
        console.log(pokemonCards); // 15 objs
        console.log("setting loading to true");
        setLoading(true)
        fetchAllPokemonDetails()
    }, [pokemonCards])

    const router = createBrowserRouter(
        [
          {
            path: "/",
            element: <Navigation />,
            children : [
              {
                path: "/",
                element: <Home />,
              },
              {
                path: "/your-library",
                element: <CardList pokemonCards={pokemonCards} />
              },
              {
                path: "/your-library/:id/details",
                element: <CardDetails pokemonCards={pokemonCards}/>
              },
              {
                path: "/play",
                element: <GameContainer />
              }
            ]
          }
        ]
      )

    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default CardContainer