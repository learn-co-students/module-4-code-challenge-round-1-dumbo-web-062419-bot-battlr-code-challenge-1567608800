import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  state = {
	  botClicked: [],
	  clicked: false
  }
  handleOnClick = (bot) => {
	this.setState({
		botClicked: [...this.state.botClicked, bot],
		clicked: !this.state.clicked
	})
	this.props.handleClickedBots(this.state.botClicked)
	 
   }
  render(){
	  const bots = this.props.allBots.map(bot => {
		  return <BotCard handleOnClick={this.handleOnClick} key={bot.id} bot={bot}/>
	  })

	  
	  console.log(this.state.clicked);
	  
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  
    		  Collection of all bots
			  {bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
