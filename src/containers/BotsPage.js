import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

class BotsPage extends React.Component {
  state ={
    userBots: []
  }

  recruitBot = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div>
        <BotCollection recruitBot={this.recruitBot} bots={this.props.bots} />
        <YourBotArmy userBots={this.state.userBots} />
      </div>
    );
  }

}

export default BotsPage;
