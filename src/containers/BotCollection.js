import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  render(){
	  const botCards = this.props.allBots.map(bot => <BotCard bot={bot} handleChosenBot={this.props.handleChosenBot}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {botCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
