const PokemonCard = ({pokemonCard}) => {

    // const handleViewButton = () => {
    //     handleButtonClick
    // }

    return (

            pokemonCard.details ?
            <>
            <section className="card">
                <img src={pokemonCard.details.sprites.other['official-artwork'].front_shiny} alt="" />
                <p><strong>{pokemonCard.details.name.toUpperCase()}</strong></p>
                <button>View Details</button>
            </section>
            </>
                : 
                <p className="loading">Loading pokemon</p>
            
    )

}

export default PokemonCard