import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokenumber: '',
      pokename:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch(`http://pokeapi.co/api/v2/pokemon/?limit=200&offset=0`)
      .then(x=>x.json())
      .then(x=>console.log(x))
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    fetch(`http://pokeapi.co/api/v2/pokemon/${this.state.pokenumber}`)
      .then(x=>x.json())
      .then(x=>{
        console.log(x);
        this.setState({
          pokename: x.name
        })
      })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} >
          Pokemon Number:<input onChange={this.handleChange} name='pokenumber' value={this.state.pokenumber}/>
          <button>Submit</button>
        </form>
        {(this.state.pokename)?this.state.pokename :'no'}
      </div>
    );
  }
}

export default App;
