import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  state = {
	  team: []
  }

handleClick = (id) => {
	console.log("hellooooooooo", id)
	if(id === id){
	this.setState({ team: [...this.state.team, id]})
	}
	else {
		this.state.team
	}
}

  render(){
	  
	  const mappedBots = this.props.bots.map((botObj) => <BotCard key={botObj.id} bot={botObj} handleClick={this.handleClick}/>)
	// console.log(this.props)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
			  {mappedBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
