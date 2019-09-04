import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  state:{
	  botsInfo : {}
  }
//  	handleClick = (e) => {
// 	 this.setState({ botsInfo: bot })
//   }

  render(){
	  console.log(this.props.listAllBots)

	  const mapBot = this.props.listAllBots.map((botsInfo)=>{
		  return <BotCard onClick={botsInfo.handleClick} key={botsInfo.name} bot={botsInfo}/>
	  } )
	  
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {mapBot}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
