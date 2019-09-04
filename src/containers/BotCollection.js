import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";


class BotCollection extends React.Component {

  state = {
    clicked: false,
    currentBot: {},
    goBackClicked: false
  }

  // showBotSpecs = (selectedBot) => {
  //   // console.log(selectedBot.id)
  //   if (this.state.clicked === true) {
  //   let theBots = this.props.bots.map((bot => {
  //     if (selectedBot.id === bot.id) {
  //       return <BotSpecs bot={bot}/>
  //     } 
  //     else {
  //       return theBots
  //     }
  //   }))
  // }
  // }

  // showBotSpecs = (selectedBot) => {
  //   // console.log(selectedBot.id)
  //   if (this.state.clicked === true) {
  //     return <BotSpecs bot={selectedBot} />
  //   } 
  //   else {
  //     null
  //   }
  // }

  clickHandler = (bot) => {
    this.setState({
      clicked: !this.state.clicked,
      currentBot: bot
    })
  }

  showBotSpecs = () => {
    return <BotSpecs 
      bot={this.state.currentBot} 
      goBack={this.backToBotList}
      enlistBot={this.enlistBot}
    />
  }

  backToBotList = () => {
    this.setState({
      goBackClicked: !this.state.goBackClicked,
      clicked: false
    })
  }

  enlistBot = (bot) => {
    this.props.addToArmy(this.state.currentBot)
  }


  render(){

  	return (
      <div >
        {!this.state.goBackClicked ? 
  	  <div className="ui four column grid">
          {this.state.clicked ? this.showBotSpecs() : 
    		<div className="row">
          {this.props.bots.map((bot =>
            <BotCard 
              key={bot.id}
              bot={bot}
              // ADD BOT TO BOT ARMY
              // clickHandler={this.props.clickHandler}
              clickHandler={this.clickHandler}
              clicked={this.state.clicked}
            />
            ))}
            Your Bot Collection 
          </div> } 
  	  </div>
      : null}
      </div>
  	);
  }

};

export default BotCollection;
