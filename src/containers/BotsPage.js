import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    yourBots: [],
    show: null
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({allBots: bots}))
  }

  addToArmy = (bot) => {
    // if the bot is not already in the army (we cant find it) then add it
    if (!this.state.yourBots.find(b => b.id === bot.id)) {
      this.setState({yourBots: [...this.state.yourBots, bot], show: null})
    }
  }

  removeFromArmy = (bot) => {
    // your bots will be updated having removed the bot you clicked on
    this.setState({yourBots: this.state.yourBots.filter(b => b.id !== bot.id) })
  }

  handleShow = (bot) => {
    this.setState({show: bot})
  }

  handleGoBack = () => {
    this.setState({show: null})
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.yourBots} removeFromArmy={this.removeFromArmy}/>
        {
          this.state.show ?
          <BotSpecs bot={this.state.show} handleGoBack={this.handleGoBack} addToArmy={this.addToArmy} />
          :
          <BotCollection bots={this.state.allBots} handleShow={this.handleShow}/>
        }
      </div>
    );
  }

}

export default BotsPage;
