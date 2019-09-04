import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    myBotArmy: [],
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      // .then(allBots => console.log(allBots))
      .then(allBots => this.setState({ allBots: allBots }))
  }

  toggleEnlistBot = (bot) => {
    // console.log("enlistBot() doing it's thing!");
    if(!this.state.myBotArmy.includes(bot)){
      // console.log("Enlisting this bot: ", bot);
      this.setState({ myBotArmy: [...this.state.myBotArmy, bot] },
        // console.log("What bots do I have?", this.state.myBotArmy)
    )} else {
      // alert("You already enlisted this bot")
      let myBotArmyCopy = [...this.state.myBotArmy]
      let botRemoveIndex
      // console.log("myBotArmyCopy: ", myBotArmyCopy);
      for (let i = 0; i < myBotArmyCopy.length; i++){
        if(myBotArmyCopy[i] === bot){
          botRemoveIndex = i
        }
      }
      // console.log("botRemoveIndex: ", botRemoveIndex);
      myBotArmyCopy.splice(botRemoveIndex, 1)
      this.setState({ myBotArmy: myBotArmyCopy },
        console.log("Updated bot army", this.state.myBotArmy)
      )
    }
  }

  render() {

    // console.log("this.state.allBots: ", this.state.allBots);

    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
          myBotArmy={this.state.myBotArmy}
          toggleEnlistBot={this.toggleEnlistBot}
        />
        <BotCollection
          allBots={this.state.allBots}
          toggleEnlistBot={this.toggleEnlistBot}
        />
      </div>
    );
  }

}

export default BotsPage;
