import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state = {
    botList: [],
    botArmyList: [],
    showBotSpec: false
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(fetchedBotList => this.setState({ botList: fetchedBotList }))
  }

  addBotToArmy = (bot) => {

    this.setState({
      botArmyList: Array.from(new Set([...this.state.botArmyList, bot]))
    })
  }

  deleteBotFromArmy = (deletedBot) => {
    console.log(deletedBot)
    const updatedBotArmyList = this.state.botArmyList.filter(bot => {
      return bot.id !== deletedBot.id
    })

    this.setState({ botArmyList: updatedBotArmyList })

  }

  showBotSpec = () => {
    this.setState({
      showBotSpec: !this.state.showBotSpec
    })
  }

  render() {

    return (
      <React.Fragment>

        <YourBotArmy
          botArmyList={this.state.botArmyList}
          handleClick={this.deleteBotFromArmy}
        />

        <BotCollection
          botList={this.state.botList}
          // handleClick={this.addBotToArmy}
          handleClick={this.showBotSpec}
        />


      </React.Fragment>
    );
  }

}

export default BotsPage;
