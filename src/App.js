import React, { Component } from 'react';
import './assets/bootswatch.min.css'
import './App.css';
import pokedetails from './assets/pokedetails.json';
import CardDisplay from './components/CardDisplay'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectVal:'pokename',
      pokename:'',
      poketype:''
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
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="Form-header container-fluid">
          <div className='row title'>            
            <h1>POKEDEX</h1>
          </div>
          <div className='row searchinput justify-content-between'>
            <div className='inputcol col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4'>
              <input type='text' placeholder={`search using ${this.state.selectVal}`} onChange={this.handleChange} name={this.state.selectVal} value={this.state[this.state.selectVal]}/>
            </div>
            <div className='selectcol col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-2'>
              <select id='fieldSelect' onChange={this.selectChange} value={this.state.selectVal} >
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
              <CardDisplay key={pokemon.id} pokemon={pokemon}/>
              )
            })
          :(this.state.poketype)?
            (pokedetails.pokemon
              .filter(pokemon=>pokemon.type.join('').toLowerCase().includes(this.state.poketype.toLowerCase())))
              .map(pokemon=>{
                return(
                <CardDisplay key={pokemon.id} pokemon={pokemon}/>
                )
              })
          : pokedetails.pokemon.map(pokemon=>{
              return(
              <CardDisplay key={pokemon.id} pokemon={pokemon}/>
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
