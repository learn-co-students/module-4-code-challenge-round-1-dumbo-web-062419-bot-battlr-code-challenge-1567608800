import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
import BotSpecs from '../components/BotSpecs.js'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    botArmy: [],
    botSelected: false,
    currentBot: {},
    filteredBots: []
  }

  handleSort =(e) => {
    const botFilter = e.target.value
    const filteredBots = this.state.allBots.sort((a, b) => {
      if(botFilter === 'health'){
        return a.health > b.health ? -1 : 1
      } else if (botFilter === 'damage'){
        return a.damage > b.damage ? -1 : 1
      } else if (botFilter === 'armor'){
        return a.health > b.health ? -1 : 1
      }
    })
    this.setState({ filteredBots })
  }

  handleChosenBot = (bot) => {
    this.setState({
      currentBot: bot,
      botSelected: true
    })
  
  }

  handleGoBack = () =>{
    this.setState({
      botSelected: false
    })
  }

  handleAddToArmy = (bot) =>{
    if(this.state.botArmy.includes(bot)){
      const newArmy = this.state.botArmy.filter(function(ele){
        return ele !== bot
      })
      this.setState({
        botArmy: newArmy
      })
    } else {
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      })
    }
  }


  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => this.setState({
      allBots: data,
      filteredBots: data
    }))
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleChosenBot={this.handleChosenBot}/>
        {this.state.botSelected ? 
        <BotSpecs bot={this.state.currentBot} handleAddToArmy={this.handleAddToArmy} handleGoBack={this.handleGoBack}/>
        :
        null  
        }
        <div>
          <p>Sort by:</p>
          <select onChange={this.handleSort}>
            <option value="health" >Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
          </select>
        </div>
        <BotCollection allBots={this.state.filteredBots} handleChosenBot={this.handleChosenBot}/>
      </div>
    );
  }

}

export default BotsPage;
