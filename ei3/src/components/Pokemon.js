import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        const name = this.props.name;
        const url = this.props.url;
        const id = this.props.id;
        const types = this.props.types;
        const evolution = this.props.evolution;
        return (
            <li  className="card" value={id}>
                <h2>{name}</h2>
                <h4>{evolution}</h4>
                <img src={url} alt={name} />
               {/*  {<ul>
                    {types.map((type, i) => {
                        return <li key={i}>{type}</li>
                    })}
                </ul>} */}
            </li>
        );
    }
}

export default Pokemon;