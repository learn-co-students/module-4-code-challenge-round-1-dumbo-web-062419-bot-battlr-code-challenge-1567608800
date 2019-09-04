import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    botList: [],
    botArmyList: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(fetchedBotList => this.setState({ botList: fetchedBotList }))
  }

  addBotToArmy = (bot) => {
    this.setState({
      botArmyList: [...this.state.botArmyList, bot]
    })
  }

  deleteBotFromArmy = (deletedBot) => {
    console.log(deletedBot)
    const updatedBotArmyList = this.state.botArmyList.filter(bot => {
      return bot.id !== deletedBot.id
    })

    this.setState({ botArmyList: updatedBotArmyList })

  }

  render() {

    return (
      <React.Fragment>

        <BotCollection
          botList={this.state.botList}
          handleClick={this.addBotToArmy}
        />

        <YourBotArmy
          botArmyList={this.state.botArmyList}
          handleClick={this.deleteBotFromArmy}
        />

      </React.Fragment>
    );
  }

}

export default BotsPage;
