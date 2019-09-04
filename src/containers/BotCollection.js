import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	const themBots = this.props.bots.map(bot => {
		return <BotCard 
		addToArmy={this.props.addToArmy}
		bot={bot}
		/>
	})
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {themBots}
			  
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
