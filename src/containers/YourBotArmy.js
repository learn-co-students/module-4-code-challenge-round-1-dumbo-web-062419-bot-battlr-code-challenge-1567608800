import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {

    const renderedBots = this.props.botArmyList.map(bot =>
      <BotCard
        key={bot.id}
        {...bot}
        handleClick={this.props.handleClick} />
    )

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {renderedBots}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
