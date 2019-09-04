import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";
class BotsPage extends React.Component {
 state={
   allBots: [],
   chosenBots:[]
 }
componentDidMount() {
 fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
 .then(response => response.json())
 .then(bots => this.setState({allBots: bots}))
}



botArmy = (Obj) => {
  this.setState({
      chosenBots: [ ...this.state.chosenBots, Obj]
    })
  }

  


 render() {
   console.log(this.state)
   return (
     <div className="ui container">
       <YourBotArmy
       bots={this.state.chosenBots}
       
       />
       <BotCollection 
       bots={this.state.allBots} 
       botArmy={this.botArmy} 
       />
     </div>
   );
 }
}
export default BotsPage;