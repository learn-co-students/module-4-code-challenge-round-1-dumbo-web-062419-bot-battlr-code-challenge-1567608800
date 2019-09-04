import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";


class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          Your Bot Army
          {this.props.bots.map((bot =>
            <BotCard 
              key={bot.id}
              bot={bot}
              clickHandler={this.props.clickHandler}
            />
          ))}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
