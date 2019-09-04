import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  constructor(props) {
    super(props)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot =>
            <BotCard
              bot={bot}
              key={bot.id}
              showOrRemove={this.props.handleShow}
          />)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
