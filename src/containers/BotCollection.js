import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){

    // console.log("allBots received by BotColletion: ", this.props.allBots);

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..
    		  Collection of all bots*/}
          {this.props.allBots.map(bot => {
            return <BotCard key={bot.id} bot={bot} toggleEnlistBot={this.props.toggleEnlistBot} />
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
