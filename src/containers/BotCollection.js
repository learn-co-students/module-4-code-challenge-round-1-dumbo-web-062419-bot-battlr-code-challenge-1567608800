import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    const singleBot = this.props.bots.map(bot => {
      return <BotCard bot = {bot}
         key ={bot.id}
         armyBots={this.props.botsForArmy}
         />
    })
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {singleBot}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
