import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    yourBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({allBots: bots}))
  }

  addToArmy = (bot) => {
    if (!this.state.yourBots.find(b => b.id === bot.id)) {
      this.setState({yourBots: [...this.state.yourBots, bot]})
    }
  }

  removeFromArmy = (bot) => {
    this.setState({yourBots: this.state.yourBots.filter(b => b.id !== bot.id) })
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.yourBots} removeFromArmy={this.removeFromArmy}/>
        <BotCollection bots={this.state.allBots} addToArmy={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
