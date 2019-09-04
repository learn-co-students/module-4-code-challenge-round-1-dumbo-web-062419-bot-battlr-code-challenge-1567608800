import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"

class BotsPage extends React.Component {

  state = {
    allBots: [],
    myBots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => this.setState({
      allBots: data
    }))
  }

  /// ADDS BOT TO BOT ARMY
  // addBot = (bot) => {
  //   if (this.state.myBots.includes(bot)) {
  //     alert("You already got this bot!")
  //   }
  //   else { 
  //     this.setState({
  //       myBots: [...this.state.myBots, bot]
  //     })
  //   }
  // }

  /// REMOVES BOT FROM BOT ARMY  
  // removeBot = (bot) => {
  //   let copiedBots = [...this.state.myBots]
  //   let index = copiedBots.indexOf(bot)
  //   copiedBots.splice(index, 1)
  //   this.setState({
  //     myBots: copiedBots
  //   })
  // }

  addBotToBotArmy = (bot) => {
    if (this.state.botArmy.includes(bot)) {
      alert("You already got this bot!")
    }
    else { 
      this.setState({
      botArmy: [...this.state.botArmy, bot]
      })
    }
  }

  render() {
    return (
      <div>
        <BotCollection 
          bots={this.state.allBots}
          addToArmy={this.addBotToBotArmy}
          /// HANDLER TO ADD BOT
          // clickHandler={this.addBot}
        />
        <YourBotArmy 
          // bots={this.state.myBots}
          bots={this.state.botArmy}

          /// HANDLER TO REMOVE BOT
          // clickHandler={this.removeBot}
        />
      </div>
    );
  }

}

export default BotsPage;
