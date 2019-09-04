import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
    super()
    this.state = {
      allRobots: [],
      myArmy: []
    }
  }

  //FETCH ROBOTS
  componentDidMount(){
    fetch(" https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    // .then(robotData => robotData.map(robot =>{}))
    .then(data => this.setState({allRobots: data}))
  }


  enlistNewRobot = (bot) => {
    let index = this.state.allRobots.indexOf(bot);
    this.state.allRobots.splice(index, 1)
    console.log(index)
    this.setState({
      allRobots: this.state.allRobots,
      myArmy: [bot, ...this.state.myArmy]
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy
          enlisted = {this.state.myArmy}
        />
        <BotCollection
          data={this.state.allRobots}
          addRobot={this.enlistNewRobot}
        />
      </div>
    );
  }

}

export default BotsPage;
