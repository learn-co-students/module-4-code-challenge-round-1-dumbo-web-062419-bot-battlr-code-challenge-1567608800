import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state={
    allBots: [],
    botArmy: []
  }

componentDidMount() {
  fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  .then(response => response.json())
  .then(bots => this.setState({allBots: bots}))
}

addBotToArmy = (bot) => {
  const updatedArmy = [...this.state.botArmy, bot];
  this.setState({ botArmy: updatedArmy });
}

handleLogout = () => {
  this.setState({ username: '' })
}



  render() {
    return (
      <div className="ui container">
        <YourBotArmy bots={this.state.botArmy}  />        
        <BotCollection bots={this.state.allBots} addBotToArmy={this.addBotToArmy} />
      </div>
    );
  }

}

export default BotsPage;
