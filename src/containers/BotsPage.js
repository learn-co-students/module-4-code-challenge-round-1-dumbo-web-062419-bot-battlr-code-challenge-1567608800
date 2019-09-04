import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    army: []
  }

  componentDidMount(){
    fetch(` https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(res => res.json())
    .then(data => this.setState({allBots: data

    }))
  }

  handleClick = (bot) => {

   this.setState({
     army: [...this.state.army, bot]
   })
  }

 removeArmy =(botObj) => {
   const copy = [...this.state.army]
   const newArmy = copy.filter(bot => bot.id !== botObj.id)
   this.setState({ army: newArmy})
 }

  render() {
    return (
      <div>
      <YourBotArmy army={this.state.army} removeArmy={this.removeArmy}/>
        <BotCollection allBots={this.state.allBots} handleClick={this.handleClick}/>

      </div>
    );
  }

}

export default BotsPage;
