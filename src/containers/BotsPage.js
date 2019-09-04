import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  }

  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(res => res.json())
    .then(bots => this.setState({bots: bots}))
  }

  addToArmy = (botPic) => {
    if (this.state.army.find(bot => bot.avatar_url === botPic.toString())){
      return null;
    } else {
      let newGuy = this.state.bots.find((bot) => {
        return bot.avatar_url === botPic.toString()
      })
      let newRecruit = {...newGuy, enlisted: true}
      this.setState({
        army: [...this.state.army, newRecruit]
      })
    }
  }

  removeFromArmy = (botPic) => {
    let updatedArmy = [...this.state.army].filter((bot) => {
      return bot.avatar_url !== botPic.toString()
    })
    this.setState({army: updatedArmy})
  }

  render() {
    const { bots, army } = this.state
    return (
      <div>
        <YourBotArmy removeFromArmy={this.removeFromArmy} army={army}/>
        <BotCollection bots={bots} addToArmy={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
