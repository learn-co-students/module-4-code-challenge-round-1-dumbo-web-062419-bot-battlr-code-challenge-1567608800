import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    
    return (
      <div>
          <YourBotArmy 
          addToArmy={this.props.addToArmy}
          army={this.props.army}
      />
      <BotCollection 
      addToArmy={this.props.addToArmy}
      bots={this.props.bots}
      />
    
      </div>
    );
  }

}

export default BotsPage;
