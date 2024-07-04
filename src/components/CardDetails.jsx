import { Link } from "react-router-dom"


const CardDetails = ({pokemonCards}) => {


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
                            <li>{ability.name}</li>
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