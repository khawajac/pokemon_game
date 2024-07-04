import { Link } from "react-router-dom"


const CardDetails = () => {


    return (
        <>
            <section>
                <img src={pokemonCard.details.sprites.other['showdown'].front_shiny} alt="" />
                <h2>{pokemonCard.details.name.toUpperCase()}</h2>
                <ul>
                    <p>Abilities</p>
                    {pokemonCard.details.abilities.map((ability) => {
                        return (
                            <li>{ability.name}</li>
                        )
                    })}
                </ul>

            </section>
        </>
    )

}

export default CardDetails