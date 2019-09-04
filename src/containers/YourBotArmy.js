import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log(this.props.army)
    // console.log(armyBotComponent)

    let botComponent = this.props.army.map(bot => {
      return < BotCard bot={bot} key={bot.id} removeArmy={this.props.removeArmy}/>
    })

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {botComponent}

          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
