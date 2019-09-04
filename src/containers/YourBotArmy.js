import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log(this.props.army);
    let myArmy = this.props.army.map((recruit) => <BotCard bot={recruit} key={recruit.id} removeFromArmy={this.props.removeFromArmy}/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {myArmy}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
