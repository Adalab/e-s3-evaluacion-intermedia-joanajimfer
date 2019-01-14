import React, { Component } from 'react';
import Pokemon from './Pokemon';


class PokeList extends Component {
    render () {
        const items = this.props.items;
        return (
            <ul className="poke__card">
                {items.map((pokemon, i) => {
                    const name = pokemon.name;
                    const url = pokemon.url;
                    const key = pokemon.id;
                    return <Pokemon i={key} name={name} url={url} />
                })}
            </ul>
        )
    }
}



export default PokeList;