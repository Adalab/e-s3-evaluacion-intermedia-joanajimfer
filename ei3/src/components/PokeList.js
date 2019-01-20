import React from 'react';



class PokeList extends React.Component {
    
    
    render() {
        const mypokemons = this.props.pokemon;
    console.log(mypokemons);
        return (
            <ul>
                {mypokemons.map((pokemon) => {
                    
                    return (<li key={pokemon.id}>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.url} alt={pokemon.name}/>
                        <ul>
                            {pokemon.types.map((type, id) => {
                                return (
                                    <li key={id}>{type}</li>
                                )
                            })}
                        </ul>
                    </li>)
                })}
            </ul>
        )
    }
}

export default PokeList;