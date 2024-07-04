import { Link, useLoaderData } from "react-router-dom"


const CardDetails = () => {


    const pokemonCards = useLoaderData(); 

    return (

        pokemonCards.details ?
        <>
            <section>
                <h2>{pokemonCards.details.name.toUpperCase()}</h2>
                <img src={pokemonCards.details.sprites.other['showdown'].front_shiny} alt="" />
                <ul>
                    <p>Abilities</p>
                    {pokemonCards.details.abilities.map((ability) => {
                        return (
                            <li id="abilities">{ability.name}</li>
                        )
                    })}
                </ul>
            </section>
        </>
            : 
            <p className="loading">Loading pokemon</p>
    )
}

export default CardDetails; 