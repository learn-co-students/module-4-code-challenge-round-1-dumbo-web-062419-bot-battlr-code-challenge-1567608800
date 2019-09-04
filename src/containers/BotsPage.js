import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    // console.log(this.props.allBots)
    return (
      <div>
        <YourBotArmy botArmy={this.props.botArmy} removeBot={this.props.removeBot} />
        <BotCollection allBots={this.props.allBots} enlistBot={this.props.enlistBot} />
      </div>
    );
  }

}

export default BotsPage;
