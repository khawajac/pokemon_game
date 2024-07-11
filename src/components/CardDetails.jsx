import { Link, useLoaderData } from "react-router-dom"


const CardDetails = () => {


    const pokemonCards = useLoaderData(); 
    console.log(pokemonCards.details.stats)

    return (

        pokemonCards.details ?
        <>
            <section className="card-details">
                <h2>{pokemonCards.details.name.toUpperCase()}</h2>
                <img src={pokemonCards.details.sprites.other['showdown'].front_shiny} alt="{pokemonCards.details.name}" />
                <ul>
                    <p>Abilities</p>
                    {pokemonCards.details.abilities.map((ability, index) => (
                            <li key={index} id="abilities">{ability.ability && ability.ability.name ?
                            ability.ability.name : 'Unknown'}</li>
                    ))}
                </ul>
                <ul>
                    <p>Stats</p>
                    {pokemonCards.details.stats.map((stat, index) => 
                        <li key={index} id="stat-name">{stat.stat && stat.stat.name ? `${stat.stat.name}: ${stat.base_stat}` : 'Unknown'}</li>
                
                )}
                </ul>
            </section>
        </>
            : 
            <p className="loading">Loading pokemon</p>
    )
}

export default CardDetails; 