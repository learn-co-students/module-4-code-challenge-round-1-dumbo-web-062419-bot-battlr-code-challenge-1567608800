import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
	
	botCards = () => (
		this.props.bots.map(bot => <BotCard bot={bot} addBotToArmy={this.props.addBotToArmy} />)
	)

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.botCards()}
    		</div>
  	  </div>
  	);
  }
};

export default BotCollection;