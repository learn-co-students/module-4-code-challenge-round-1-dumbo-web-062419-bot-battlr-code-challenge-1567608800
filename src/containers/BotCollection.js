import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";


class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.bots.map((bot =>
            <BotCard 
            key={bot.id}
            bot={bot}
            clickHandler={this.props.clickHandler}
            />
            ))}
            Your Bot Collection 
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
