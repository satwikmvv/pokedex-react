import React, { Component } from 'react';
import './assets/bootswatch.min.css'
import './App.css';
import pokedetails from './assets/pokedetails.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokenumber: null,
      pokename:'',
      pokeimg:'',
      err:'',
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    console.log(pokedetails.pokemon)
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
          pokeimg:x.sprites.front_default,
          pokename: x.name
        })
      })
      .catch((error)=>this.setState({
        err:'Pokemon Not Found'
      }))
    
  }
  render() {
    return (
      <div className="App">
        <div className="Form-header">
          <form onSubmit={this.handleSubmit} >
            Pokemon:<input onChange={this.handleChange} name='pokename' value={this.state.pokename}/>
            <button type="button" className="btn-primary">Submit</button>
          </form>
        </div>
        
        <section className="container-fluid">
          <div className="row">
            {pokedetails.pokemon.map(pokemon=>{
              return(
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card mb-3">
                    <h3 className="card-header">{pokemon.name}</h3>
                    <div className="card-body">
                      <h5 className="card-title">Type:{pokemon.type.join('/')}</h5>
                      <h6 className="card-subtitle text-muted">Poke Number:{pokemon.num}</h6>
                    </div>
                    <img className="pokeimg" src={pokemon.img} alt={pokemon.name} />
                  </div>
                </div>
                
              )
            })}
          </div>
          
        </section>
        {/* <section>
          {(this.state.pokenumber)?
            <div className="row">
              <div className="card mb-3">
                <h3 className="card-header">{this.state.pokename}</h3>
                <div className="card-body">
                  <h5 className="card-title">{this.state.pokename}</h5>
                  <h6 className="card-subtitle text-muted">Poke ID:{this.state.pokenumber}</h6>
                </div>
                <img className="pokeimg" src={this.state.pokeimg} alt='' />
              </div>
            </div>
          
            :<h1>{this.state.err}</h1>
          }
        </section> */}
        
      </div>
    );
  }
}

export default App;
