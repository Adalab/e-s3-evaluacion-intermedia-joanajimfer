import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3 className="pokemon_name">{this.props.name}</h3>
                <img src={this.props.srcPokemon} 
                alt={this.props.name} 
                />
                <ul className="types_list">
                    {this.props.kind.map((type, id) => {
                        return(
                            <li 
                            className="types_item"
                            key={id}>{type}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Pokemon;

