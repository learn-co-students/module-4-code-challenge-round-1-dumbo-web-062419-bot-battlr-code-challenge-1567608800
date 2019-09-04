import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'
// import BotSpecs from '../components/BotSpecs.js'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    army: [],
    specs: true
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

 showBotSpecs =(bot) => {
 this.setState({specs: !this.state.specs})
 console.log("Dear A and R, I know how to do this part with specs(propbably), but I need more time. Just now I have two different click events for add to army and show specs. Solution - something like hide login form and show User name in Poetry Lab. I should properly put this.state.specs (false/true) fork. Have a great day!)")
 }

  render() {
    return (
      <div>
      <YourBotArmy army={this.state.army} removeArmy={this.removeArmy}/>
      if (this.state.specs) {
      <BotCollection allBots={this.state.allBots} handleClick={this.handleClick} showBotSpecs={this.showBotSpecs}/>
    } else {
      // <BotSpecs />
    }
      </div>

    );
  }

}

export default BotsPage;
