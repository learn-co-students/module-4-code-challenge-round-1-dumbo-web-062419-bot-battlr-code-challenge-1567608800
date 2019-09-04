import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const themBots = this.props.army.map(bot => {
      return <BotCard 
      addToArmy={this.props.addToArmy}
      inArmy={true}
      bot={bot}
      />
    })

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {themBots}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
