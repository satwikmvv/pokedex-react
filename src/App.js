import React, { Component } from 'react';
import './assets/bootswatch.min.css'
import './App.css';
import pokedetails from './assets/pokedetails.json';
import CardDisplay from './components/CardDisplay';
import PokeInfo from './components/PokeInfo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectVal:'pokename',
      pokename:'',
      poketype:'',
      showpoke:true,
      pokeinfo:null
    }
    this.handleChange=this.handleChange.bind(this);
    this.selectChange=this.selectChange.bind(this);
    this.cardClick=this.cardClick.bind(this);
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
  
  cardClick=(e)=>{
    var mons=e;
    this.setState(prevState=>({
      showpoke: !prevState.showpoke,
      pokeinfo:mons
    }))

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
            (
              (this.state.showpoke)?
              (pokedetails.pokemon
              .filter(pokemon=>pokemon.name.toLowerCase().includes(this.state.pokename.toLowerCase())))
              .map(pokemon=>{
                return(
                <CardDisplay key={pokemon.id} pokemon={pokemon} onClick={()=>this.cardClick(pokemon)}/>
                )
              })
              : <PokeInfo pokemon={this.state.pokeinfo} onClick={()=>this.cardClick(this.state.pokeinfo)}/>
            )
          :(this.state.poketype)?
            (
              (this.state.showpoke)?
              (pokedetails.pokemon
                .filter(pokemon=>pokemon.type.join('').toLowerCase().includes(this.state.poketype.toLowerCase())))
                .map(pokemon=>{
                  return(
                  <CardDisplay key={pokemon.id} pokemon={pokemon} onClick={()=>this.cardClick(pokemon)}/>
                  )
                })
                : <PokeInfo pokemon={this.state.pokeinfo} onClick={()=>this.cardClick(this.state.pokeinfo)}/>
            )
          : (this.state.showpoke)?
            pokedetails.pokemon.map(pokemon=>{
              return(
              <CardDisplay key={pokemon.id} pokemon={pokemon} onClick={()=>this.cardClick(pokemon)}/>
              )
            })
            : <PokeInfo pokemon={this.state.pokeinfo} onClick={()=>this.cardClick(this.state.pokeinfo)}/>
          }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
