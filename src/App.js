import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokenumber: null,
      pokename:'',
      pokeimg:'',
      err:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({
      pokename:'',
      pokeimg:'',
      pokenumber:null
    })
    fetch(`http://pokeapi.co/api/v2/pokemon/${this.state.pokename}`)
      .then(x=>x.json())
      .then(x=>{
        console.log(x);
        this.setState({
          pokenumber: x.id,
          pokeimg:x.sprites.front_default
        })
      })
      .catch((error)=>this.setState({
        err:'Pokemon Not Found'
      }))
    
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} >
          Pokemon:<input onChange={this.handleChange} name='pokename' value={this.state.pokename}/>
          <button>Submit</button>
        </form>
        {(this.state.pokenumber)?
          <div>
            <h1>Pokemon Index number:{this.state.pokenumber}</h1>
            <img src={this.state.pokeimg} alt=''/>
          </div>
          :<h1>{this.state.err}</h1>
        }
      </div>
    );
  }
}

export default App;
