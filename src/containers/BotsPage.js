import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy"


class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots : []
    
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(botsData => {
      this.setState( {allBots: botsData} )
    })
  }


  render() {
    // console.log(this.state)
    return (
      <div>
         <YourBotArmy />
        <BotCollection listAllBots= {this.state.allBots}/>
      

        
      </div>
    );
  }

}

export default BotsPage;
