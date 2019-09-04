import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    const botArmy = this.props.botArmy.map((bot, idx) => {
      return <BotCard bot={bot} key={idx} removeBot={this.props.removeBot} />
    })

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { botArmy }
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
