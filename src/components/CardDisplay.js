import React from 'react';

const CardDisplay=(props)=>  {
    
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <h4 className="card-header">{props.pokemon.name}</h4>
                  <div className="card-body">
                    <h5 className="card-title">Type:{props.pokemon.type.join('/')}</h5>
                    <h6 className="card-subtitle text-muted">Poke Number:{props.pokemon.num}</h6>
                  </div>
                  <img className="pokeimg" src={props.pokemon.img} alt={props.pokemon.name} />
                </div>
            </div>
        );
    
}

export default CardDisplay;