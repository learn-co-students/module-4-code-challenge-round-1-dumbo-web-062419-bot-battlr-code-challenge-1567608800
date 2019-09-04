import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	// const bots = 
	

  render(){
	
	
	//   console.log("BOTS COLL",this.props)
	const bots = this.props.bots.map(bot => {
		return <BotCard bot={bot} key={bot.id} addToTop={this.props.addToTop}/>
	})
	
	
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			{bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
