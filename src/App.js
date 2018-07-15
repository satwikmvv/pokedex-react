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
      selectnull:''
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="Form-header container-fluid">
          <div className='row title'>            
            <h1>POKEDEX</h1>
          </div>
          <div className='row searchinput'>
            <div className='col-xs-12 col-sm-8 col-md-7 col-lg-7'>
              <input type='text' placeholder={`search using ${this.state.selectVal}`} onChange={this.handleChange} name={this.state.selectVal} value={this.state[this.state.selectVal]}/>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-5 col-lg-5'>
              <select id='fieldSelect' onChange={this.selectChange} value={this.state.selectVal} >
                {/* <option value='selectnull'>Select</option> */}
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
          :
          pokedetails.pokemon.map(pokemon=>{
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
