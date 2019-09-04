import React from "react";
import BotSpecs from "./BotSpecs.js"

class BotCard extends React.Component {
  state = {
    clicked: false
  }
  showSpecs = () => {
  this.setState({
    clicked: !this.state.clicked
  })
}

  goBack = () => {
    this.setState({
      clicked: false
    })
  }

  handleClick = (bot) => {
    this.setState({
      clicked: false
    })
    this.props.addToArmy(bot)
    
  }
  render() {
  const bot = this.props.bot;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    
    <div  className="ui column">
  
      <div
        className="ui card"
        key={bot.id}
        onClick={this.showSpecs}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
      {this.state.clicked? <BotSpecs 
      goBack ={this.goBack}
      bot={this.props.bot}
      handleClick ={this.handleClick}
      />:null}
    
    </div>
    
  );

}
}

export default BotCard;
