import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  state = {
    showBots: true,
    showBot: {}
  }

  renderBotsOrBot = (botId) => {
    const showBot = this.props.bots.find((bot) => bot.id === Number(botId))
    this.setState({
      showBots: !this.state.showBots,
      showBot: showBot
    })
  }

  render(){


    const allBots = this.props.bots.map((bot) => <BotCard bot={bot} key={bot.id} addToArmy={this.props.addToArmy} renderBotsOrBot={this.renderBotsOrBot}/>)


  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.state.showBots ?
            allBots
            :
            <BotSpecs bot={this.state.showBot} renderBotsOrBot={this.renderBotsOrBot} addToArmy={this.props.addToArmy}/>
          }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
