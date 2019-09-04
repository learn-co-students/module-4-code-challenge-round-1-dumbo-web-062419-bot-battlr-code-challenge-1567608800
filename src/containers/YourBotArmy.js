import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class YourBotArmy extends React.Component {
  render(){
    console.log(this.props)
    const bots = this.props.bots.map((bot, index) => {
      return <BotCard
      bot={bot} 
      key={`${bot.name} - ${index}`} 
      />
    })
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {bots}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
