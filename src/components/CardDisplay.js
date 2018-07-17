import React,{Component} from 'react';

class CardDisplay extends Component  {
  constructor(props){
    super(props)
  }
      render(){
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" onClick={this.props.onClick} pokemon={this.props.pokemon}>
                <div className="card" >
                  <h4 className="card-header">{this.props.pokemon.name}</h4>
                  <div className="card-body">
                    <h5 className="card-title">Type:{this.props.pokemon.type.join('/')}</h5>
                    <h6 className="card-subtitle text-muted">Poke Number:{this.props.pokemon.num}</h6>
                  </div>
                  <img className="pokeimg" src={this.props.pokemon.img} alt={this.props.pokemon.name} />
                </div>
            </div>
        );
      }
}

export default CardDisplay;