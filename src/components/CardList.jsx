import { useState } from "react";
import PokemonCard from "./PokemonCard";
const CardList = ({pokemonCards}) => {

    const [searchCard, setSearchCard] = useState(""); 
    const [filteredCards, setFilteredCards] = useState(pokemonCards); 

    const handleSearchQuery = (e) => {
        const pokemonName = e.target.value; 
        setSearchCard(pokemonName); 

        // filtering the pokemon cards based on the pokemon name being searched
        if(pokemonName != ""){
        e.preventDefault(); 
        const filteredPokemonCards = pokemonCards.filter(card => card.name.toLowerCase().includes(pokemonName.toLowerCase()))
        setFilteredCards(filteredPokemonCards)
        } else {
            setFilteredCards(pokemonCards); 
        }
    }
    
    const mappedPokemonCards = filteredCards.map((pokemonCard, index) => {
        return <PokemonCard 
        pokemonCard={pokemonCard}
        key={index}/>
    })
    
    return (
        <>
            <h2>Card Library</h2>
            <form id="search-card-list">
                <input id="search-input" 
                type="text" 
                placeholder="Search Pokemon Name" 
                value={searchCard}
                onChange={handleSearchQuery}
                />
            </form>
            <section>
                {mappedPokemonCards}
            </section>
        </>
        
    )

}

export default CardList; 