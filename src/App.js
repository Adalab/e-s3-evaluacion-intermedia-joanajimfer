import React, { Component } from 'react';
import PokeList from './components/PokeList/PokeList';
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       pokemon : [
        {"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
        {"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},
        {"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},
        {"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
        {"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},
        {"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},
        {"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},
        {"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},
        {"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},
        {"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}
      ],
      query:""
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    const inputQuery = e.target.value;
    this.setState({
      query: inputQuery,
    })
  }

  filterPokemon() {
    const filterPokemon = this.state.pokemon.filter(item => {
      const pokemonName = item.name;
      console.log(pokemonName);
      if(pokemonName.includes(this.state.query)) {
        return true
      } else {
        return false
      }
    })
    return filterPokemon;
  }
  render() {
    const arrayOfFilterPokemon = this.filterPokemon();
    return (
      <div className="App">
      <h1>Mis Pokemon</h1>
        <input placeholder="Busca por su nombre" onChange={this.handleInput} value={this.state.query}></input>
        <PokeList pokemon={arrayOfFilterPokemon} 
        />
      </div>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default App;
