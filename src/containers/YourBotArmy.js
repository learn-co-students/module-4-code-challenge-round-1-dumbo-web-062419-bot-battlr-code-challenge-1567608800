import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const enlistedRobots = this.props.enlisted.map(robot =>
      <BotCard key={robot.id} bot={robot} />
    )

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {enlistedRobots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
