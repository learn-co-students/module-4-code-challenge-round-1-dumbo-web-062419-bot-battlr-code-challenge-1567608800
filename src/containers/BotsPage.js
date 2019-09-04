import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {

  state={
    allBots: [],
    botArmy: [],
    currentBot: ""
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(bots => this.setState({allBots: bots}))
  }

  addBotToArmy = (bot) => {
    const updatedArmy = [...this.state.botArmy, bot];
    this.setState({ botArmy: updatedArmy });
    this.setState({currentBot: ""})
  }

  viewBot = (bot) => {
    this.setState({ currentBot: bot });
  }

  // Almost there! Just needed a final if to switch the bottom view, but I loved this challenge!
  render() {
    return (
      <div className="ui container">
        <YourBotArmy bots={this.state.botArmy}  />
        <BotCollection bots={this.state.allBots} addBotToArmy={this.addBotToArmy} viewBot={this.viewBot} />
      </div>
    );
  }

}

export default BotsPage;
