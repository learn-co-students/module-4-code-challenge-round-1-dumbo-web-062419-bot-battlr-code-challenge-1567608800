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
          <h1> To add Bot Click on Image</h1>
          <p>R and A, To see Message - Click SPEC Button</p>
          {botComponent}

          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
