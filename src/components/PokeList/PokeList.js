import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './PokeList.css';
import PropTypes from 'prop-types';



class PokeList extends React.Component {
    render() {
        const mypokemons = this.props.pokemon;
        console.log(mypokemons);
        return (
            <ul className="poke__card">
                {mypokemons.map((pokemon) => {

                    return (<li 
                        className="card"
                        key={pokemon.id}>  
                        <Pokemon 
                        name={pokemon.name} 
                        srcPokemon={pokemon.url} 
                        kind={pokemon.types}
                         />
                    </li>)
                })}
            </ul>
        )
    }
}


Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    srcPokemon: PropTypes.string,
    kind: PropTypes.arrayOf(PropTypes.string)
}

export default PokeList;

