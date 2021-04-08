import React, {Component} from "react";
import './App.css';
import  {Cardlist} from "./components/card-list/card-list.component";
import {Searchbox} from './components/searchbox/searchbox.component'
class App extends Component{
  constructor(){
    super();
    this.state = {
      Monsters: [],
      Searchfield : ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(responce => responce.json())
    .then(users => this.setState({Monsters: users}))
  }
  render(){
    const {Monsters, Searchfield} = this.state;
    // const monsters = this.state.Monsters;
    // const searchfield = this.state.SearchField
    const filteredmonsters = Monsters.filter(monster =>
      monster.name.toLowerCase().includes(Searchfield.toLowerCase())
      )
    return(
      <div className="App">
      <Searchbox  placeholder="Search Monsters" handlechange={(e) => this.setState({Searchfield: e.target.value})}/>
      <Cardlist Monsters={filteredmonsters}></Cardlist>
    </div>
    )}
}

export default App;
