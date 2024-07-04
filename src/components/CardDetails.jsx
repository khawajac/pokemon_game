

const CardDetails = () => {


    return (
        <>
            <section>
                <img src={pokemonCard.details.sprites.other['showdown'].front_shiny} alt="" />
                <h2>{pokemonCard.details.name.toUpperCase()}</h2>
                <ul>
                    <p>Abilities</p>
                    <p>Ability 1</p>
                    <p>Ability 1</p>
                    <p>Ability 1</p>
                </ul>

            </section>
        </>
    )

}

export default CardDetails