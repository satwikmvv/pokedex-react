import React, { Component } from 'react';
import './assets/bootswatch.min.css'
import './App.css';
import pokedetails from './assets/pokedetails.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectVal:'selectnull',
      pokename:'',
      poketype:'',
      selectnull:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.selectChange=this.selectChange.bind(this);
  }
  
  componentDidMount() {
    console.log(pokedetails.pokemon)
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  selectChange=(e)=>{
    this.setState({
      selectVal: e.target.value,
      pokename:'',
      poketype:'',
      selectnull:''
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="Form-header head">
          <div className='row'>
            <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
              <h1>POKEDEX</h1>
            </div> 
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
              <input type='text' onChange={this.handleChange} name={this.state.selectVal} value={this.state[this.state.selectVal]}/>
              <select id='fieldSelect' onChange={this.selectChange} value={this.state.selectVal}>
                <option value='selectnull'>Select</option>
                <option value='pokename'>Pokemon</option>
                <option value='poketype'>Type</option>
              </select>
            </div>
          </div>
        </div>
        
        <section className="container-fluid">
          <div className="row">
          {(this.state.pokename)?
          (pokedetails.pokemon
          .filter(pokemon=>pokemon.name.toLowerCase().includes(this.state.pokename.toLowerCase())))
          .map(pokemon=>{
            return(
              <div key={pokemon.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                  <h4 className="card-header">{pokemon.name}</h4>
                  <div className="card-body">
                    <h5 className="card-title">Type:{pokemon.type.join('/')}</h5>
                    <h6 className="card-subtitle text-muted">Poke Number:{pokemon.num}</h6>
                  </div>
                  <img className="pokeimg" src={pokemon.img} alt={pokemon.name} />
                </div>
              </div>
              
            )
          })
          :
          pokedetails.pokemon.map(pokemon=>{
            return(
              <div key={pokemon.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card mb-3">
                  <h4 className="card-header">{pokemon.name}</h4>
                  <div className="card-body">
                    <h5 className="card-title">Type:{pokemon.type.join('/')}</h5>
                    <h6 className="card-subtitle text-muted">Poke Number:{pokemon.num}</h6>
                  </div>
                  <img className="pokeimg" src={pokemon.img} alt={pokemon.name} />
                </div>
              </div>
              
            )
          })
          }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
