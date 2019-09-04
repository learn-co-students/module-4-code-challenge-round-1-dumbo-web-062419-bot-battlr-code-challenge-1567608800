import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state={
    bots: [],
    myBotarmy:[]
  }
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => this.setState({bots: data}))
  }
  addBotToMyBotArmy = (bot) => {
    let botExit = this.state.myBotarmy.find(oldbot => oldbot === bot)
    if(!botExit){
    this.setState({ myBotarmy : [...this.state.myBotarmy , bot] })
    }
  }
  deleteBotFromMyBotArmy = (bot) => {
    let deleteBot = this.state.myBotarmy.filter(oldbot => oldbot.id !== bot.id)
    this.setState({myBotarmy : deleteBot })
  }

  render() {
    return (
      <div>
        <YourBotArmy
        bots={this.state.myBotarmy}
         deleteBotFromMyBotArmy={this.deleteBotFromMyBotArmy} />

        <BotCollection
        bots={this.state.bots}
        addBotToMyBotArmy={this.addBotToMyBotArmy} />
      </div>
    );
  }

}

export default BotsPage;
