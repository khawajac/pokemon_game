const PokemonCard = ({pokemonCard}) => {



    return (

            pokemonCard.details ?
                <>
            <img src={pokemonCard.details.sprites.other['official-artwork'].front_shiny} alt="" />
            <p>{pokemonCard.details.name}</p>
            </>
                : 
                <p>Loading pokemon</p>
            
    )

}

export default PokemonCard