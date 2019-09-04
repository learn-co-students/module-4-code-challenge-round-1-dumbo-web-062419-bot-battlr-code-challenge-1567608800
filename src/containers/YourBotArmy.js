import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    // console.log("What bots do I have?", this.props.myBotArmy)

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {this.props.myBotArmy.map(bot => {
              // console.log("Bot soldier: ", bot);
              return <BotCard
                key={bot.id}
                bot={bot}
                toggleEnlistBot={this.props.toggleEnlistBot}
              />
            })}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
