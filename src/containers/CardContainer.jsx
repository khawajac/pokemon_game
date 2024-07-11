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
        setPokemonCards(data.results)
    }

    const fetchPokemonDetails = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    const fetchAllPokemonDetails = async () => {
        pokemonCards.forEach(async (pokemon, i) => {
            const details = await fetchPokemonDetails(pokemon.url)
            const cardsCopy = [...pokemonCards]
            cardsCopy[i].details = details
            setPokemonCards(cardsCopy)
        })
    }

    const pokemonLoader = ({params}) => {
      const pokemon = pokemonCards.find(card => {
        return card.details.id === parseInt(params.id); 
        })
        return pokemon; 
    } 


    useEffect(() => {
        fetchAllPokemon()
    }, [])

    useEffect(() => {
        if (loading || pokemonCards.length <= 0) return;
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
                loader: pokemonLoader, 
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