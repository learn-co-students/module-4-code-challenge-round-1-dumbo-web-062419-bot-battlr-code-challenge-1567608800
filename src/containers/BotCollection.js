import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

	render(){
	const bot = this.props.bots.map(botObj => {
		return <BotCard 
					key={botObj.id} 
					bot={botObj} 
					recruitBot={this.props.recruitBot} />
	})
	return (
		<div className="ui four column grid">
			<div className="row">
			{bot}
			</div>
		</div>
	);
	}
};

export default BotCollection;
