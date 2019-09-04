import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"



class BotCollection extends React.Component {

  handleAddingRobot = (bot) => {
    this.props.addRobot(bot)
  }

  changeSpecs = (robot) => {
    if(robot.state.isClicked === true){

        const robot = <BotSpecs
          key={robot.id}
          bot={robot}
          changeSpecs={this.changeSpecs}
          addRobot={this.handleAddingRobot}
          />

        return (
          <div className="ui four column grid">
            <div className="row">
              {robot}
            </div>
          </div>
        );
    }
  }

  render(){

    const robots = this.props.data.map(robot =>
      <BotCard key={robot.id} bot={robot} changeSpecs={this.changeSpecs} addRobot={this.handleAddingRobot}/>
    )


  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {robots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
