import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  state = {
    clickedArmy: false
  }

 

  handleOnClick = (bot) => {
    
    this.setState({
      clickedArmy: !this.state.clickedArmy
    })
  }

  render(){

    const bots = this.props.clickedBots.map(bot => {
		  return <BotCard  handleOnClick={this.handleOnClick} key={bot.id} bot={bot}/>
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
