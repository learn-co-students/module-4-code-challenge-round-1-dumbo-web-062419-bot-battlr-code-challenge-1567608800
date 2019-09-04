import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {
  //your code here

  state={
    BotSpecs: true,
    botForSpecs: []
  }

  specs=(bot) =>{
    this.setState({BotSpecs: false});
    this.setState({botForSpecs:bot})
  }
  changeTruefalse = () => {
    this.setState({BotSpecs: false})
  }


  renderBots = () => {
    if (this.state.BotSpecs){
      return this.props.bots.map(bot =>
        < BotCard
        key={bot.id}
        bot={bot}
        addOrRemoveBotToMyBotArmy={this.specs}
        />)
    }
    else{
    return   <BotSpecs bot={this.state.botForSpecs}
    key={this.state.botForSpecs.id}
    addOrRemoveBotToMyBotArmy={this.props.addBotToMyBotArmy}
    changeTruefalse={this.changeTruefalse}/>
    }
    }



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        Collection of all bots
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
