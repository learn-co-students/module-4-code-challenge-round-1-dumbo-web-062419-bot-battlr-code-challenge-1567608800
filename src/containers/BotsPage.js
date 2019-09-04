import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
const API = ("https://bot-battler-api.herokuapp.com/api/v1/bots")

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allbots: [],
    displayBots: []
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(botsData => this.setState({ allbots: botsData }))
  }

  addToTop = (bot) => {
    console.log(bot)
    this.setState({displayBots: [bot,...this.state.displayBots]})
  }



  

  render() {
    // console.log(this.state.allbots)
    console.log(this.state.displayBots)
    return (
      <div>
        <  BotCollection bots={this.state.allbots} addToTop={this.addToTop}/>
        < YourBotArmy displayBots={this.state.displayBots}/>
      </div>
    );
  }

}

export default BotsPage;
