import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log(this.props.botsToAdd);
    const addBot = this.props.botsToAdd.map(bot => {
      return <BotCard bot = {bot}
         key = {bot.id}
         armyBots={this.props.removeBot}
         />
    })
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row" >
            {addBot}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
