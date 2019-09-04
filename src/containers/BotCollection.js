import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    // console.log(this.props)

    const botComponents = this.props.allBots.map((bot, idx) => {
      return <BotCard bot={bot} key={idx} enlistBot={this.props.enlistBot} />
    })

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { botComponents }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
