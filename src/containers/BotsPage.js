import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots: [],
    myArmy: []
  }
  
  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(data => this.setState({ bots: data}) )
  }

  addToArmy = (bot) => {
  // if (!this.state.myArmy.indexOf(bot) ){
    this.setState({ myArmy: [...this.state.myArmy, bot]})
  // }
}

  removeFromArmy =(bot) => {
    let removeBot = this.state.myArmy.slice();
    removeBot.splice(this.state.myArmy.indexOf(bot), 1)
    this.setState({ myArmy: removeBot})
  }


  render() {
    
    return (
      <div>
        <YourBotArmy myArmy={this.state.myArmy} handleClick={this.removeFromArmy}/>
        <BotCollection bots={this.state.bots} handleClick={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
