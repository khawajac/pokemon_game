import { Link, useLoaderData } from "react-router-dom"


const CardDetails = () => {


    const pokemonCards = useLoaderData(); 

    const capitalFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1); 
    }

    return (

        pokemonCards.details ?
        <>
            <section className="card-details">
                <h2>{pokemonCards.details.name.toUpperCase()}</h2>
                <img 
                src={pokemonCards.details.sprites.other['showdown'].front_shiny} 
                alt="{pokemonCards.details.name}" 
                className="card-image"/>
                <div className="abilities">
                <ul>
                    <p>Abilities</p>
                    {pokemonCards.details.abilities.map((ability, index) => (
                            <li key={index} id="abilities">{ability.ability && ability.ability.name ?
                            capitalFirstLetter(ability.ability.name) : 'Unknown'}</li>
                    ))}
                </ul>
                </div>
                <div className="stats">
                <ul>
                    <p>Stats</p>
                    {pokemonCards.details.stats.slice(0,3).map((stat, index) => 
                        <li key={index} id="stat-name">{stat.stat && stat.stat.name ? `${capitalFirstLetter(stat.stat.name)}: ${stat.base_stat}` : 'Unknown'}</li>
                
                )}
                </ul>
                </div>
            </section>
        </>
            : 
            <p className="loading">Loading pokemon</p>
    )
}

export default CardDetails; 