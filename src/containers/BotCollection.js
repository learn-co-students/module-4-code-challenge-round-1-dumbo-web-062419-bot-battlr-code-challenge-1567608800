import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	renderBots = () =>  {
		if (this.props.bots.length !== 0) {
			return this.props.bots.map(bot => <BotCard handleClick={this.props.handleClick} key={bot.id} bot={bot} />)
	}
}

  render(){

  	return (
  		 <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  Collection of all bots
    		</div>
  	  	</div>
  	);
  }

};

export default BotCollection;
