import PokemonCard from "./PokemonCard";



const CardList = ({pokemonCards}) => {
    
    const mappedPokemonCards = pokemonCards.map((pokemonCard, index) => {
        return <PokemonCard 
        pokemonCard={pokemonCard}
        key={index}/>
    })
    
    return (
        <>
            <h2>Cards go here</h2>
            <section>
                {mappedPokemonCards}
            </section>
        </>
        
    )

}

export default CardList; 