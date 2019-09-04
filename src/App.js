import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    allBots: [],
    botArmy: [],
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(botData => {
        let botArray = botData.map(bot => {
          return {...bot, enlisted: false}
        })
        this.setState({ allBots: botArray })
      })
  }

  enlistBot = (enlistBot) => {
    // console.log("enlistBot", enlistBot)
    enlistBot.enlisted = true
    if (!this.state.botArmy.includes(enlistBot)) {
      this.setState({ botArmy: [...this.state.botArmy, enlistBot] })
    }
  }

  removeBot = (removeBot) => {
    // console.log("removeBot", removeBot)
    removeBot.enlisted = false
    let botArmy = this.state.botArmy.filter(bot => {
      return bot.enlisted === true
    })
    this.setState({ botArmy: botArmy })
  }

  render() {
    // console.log(this.state.allBots)
    // console.log(this.state.botArmy)
    return (
      <div className="App">
        <BotsPage allBots={this.state.allBots}
          botArmy={this.state.botArmy}
          enlistBot={this.enlistBot}
          removeBot={this.removeBot}
        />
      </div>
    );
  }
}

export default App;
