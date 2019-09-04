import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {

  state = {
    allBots: [],
    addedBots: []
  }
  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(botsData => {
      this.setState({
        allBots: botsData
      })
    })
  }

  botsForArmy = (addBots) => {
    this.setState({
      addedBots: [...this.state.addedBots,addBots]
    })
  }

  removeBot = (deletebot) => {
      let index = this.state.addedBots.indexOf(deletebot)
      console.log(deletebot)
      let copyArmy = [...this.state.addedBots]
      copyArmy.splice(index, 1)
      this.setState({
        addedBots: copyArmy
      })
  }



  render() {
    // console.log(this.state.allBots);
    return (
      <div>
        <YourBotArmy botsToAdd = {this.state.addedBots}
          removeBot={this.removeBot}
          />

        < BotCollection bots = {this.state.allBots}
        botsForArmy={this.botsForArmy}
        />
      </div>
    );
  }

}

export default BotsPage;
