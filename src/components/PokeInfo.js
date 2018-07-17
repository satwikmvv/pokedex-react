import React, { Component } from 'react';

class PokeInfo extends Component {
    
    render() {
        return (
            <div onClick={this.props.onClick}>
                <h2>{this.props.pokemon.name}</h2>
                <h4>pokeID:{this.props.pokemon.id}</h4>
                <h5>Type:{this.props.pokemon.type.join('/')}</h5>
                <h6>Weight:{this.props.pokemon.weight}</h6>
                <img className="pokeimg" src={this.props.pokemon.img} alt={this.props.pokemon.name} />
                <h6>weakness:{this.props.pokemon.weaknesses.join('/')}</h6>

            </div>
        );
    }
}

export default PokeInfo;
