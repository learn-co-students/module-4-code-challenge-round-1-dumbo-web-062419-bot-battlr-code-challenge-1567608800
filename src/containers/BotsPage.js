import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    clickedBots: [],
    clickedInArmy: false
  }

  handleClickedBots = (bots) => {
    this.setState({
      clickedBots: bots
    })
    
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(bots => this.setState({allBots: bots}))
  }

  render() {
   
    
    return (
      <div>
         <YourBotArmy handleClickedBots={this.handleClickedBots} clickedBots={this.state.clickedBots}/>
        <BotCollection handleClickedBots={this.handleClickedBots} allBots={this.state.allBots}/> 
       
      </div>
    );
  }

}

export default BotsPage;
