const PokemonCard = ({pokemonCard}) => {



    return (
        <>
            <img src={pokemonCard.details.sprites.other['official-artwork'].front_shiny} alt="image of pokemon" />
            <p>{pokemonCard.details.name}</p>
        </>
    )

}

export default PokemonCard