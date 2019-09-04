import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here



  render(){
// console.log(this.props.allBots)
let botComponent = this.props.allBots.map(bot => {
  return < BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick} showBotSpecs={this.props.showBotSpecs}/>
})

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botComponent}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
