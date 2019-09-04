import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"

class BotsPage extends React.Component {

  state = {
    allBots: [],
    myBots: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => this.setState({
      allBots: data
    }))
  }

  addBot = (bot) => {
    if (this.state.myBots.includes(bot)) {
      alert("You already got this bot!")
    }
    else { 
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
  }

  removeBot = (bot) => {
    let copiedBots = [...this.state.myBots]
    let index = copiedBots.indexOf(bot)
    copiedBots.splice(index, 1)
    this.setState({
      myBots: copiedBots
    })
  }

  render() {
    return (
      <div>
        <BotCollection 
          bots={this.state.allBots}
          clickHandler={this.addBot}
        />
        <YourBotArmy 
          bots={this.state.myBots}
          clickHandler={this.removeBot}
        />
      </div>
    );
  }

}

export default BotsPage;
