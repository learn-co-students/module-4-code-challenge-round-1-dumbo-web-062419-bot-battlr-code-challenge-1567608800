import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    bots: [] ,
    filteredBots: [] ,
    army: [] ,
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots").then(res=> res.json())
    .then(fetchedBots => {
      this.setState({
        bots: fetchedBots ,
        filteredBots: fetchedBots
      })
    })
  }

  handleChange = (event) => {
   
    const newBots = this.state.bots.filter(bot => {
      return bot.name.includes(event.target.value)
    })
 
    this.setState({ 
      filteredBots: newBots
    })
    
  }
  addToArmy = (bot) => {
    if(bot.inArmy === true) {
      const newArmy = this.state.army.filter(botz => {
        return botz.id !==bot.id
      })
      this.setState({
        army: newArmy ,
        bots: [...this.state.bots, bot]
      })
    }
    else {
    const armyBot = {...bot, inArmy: true}     
    const newBots = this.state.bots.filter(bot => {
        return bot.id !==armyBot.id
    })
  
    this.setState({
      army: [...this.state.army, armyBot],
      bots: newBots
    })
  }
  }
  

  render() {
    return (
      <div className="App">
       <input onChange={this.handleChange} name="search" placeholder="search bots by name" />
        <BotsPage 
        army={this.state.army}
        addToArmy={this.addToArmy}
        bots={this.state.filteredBots}
        />
      </div>
    );
  }
}

export default App;
