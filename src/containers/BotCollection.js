import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here

	render() {

		const renderedBots = this.props.botList.map(bot =>
			<BotCard
				key={bot.id}
				{...bot}
				handleClick={this.props.handleClick} />
		)

		return (
			<div className="ui four column grid">
				<div className="row">
					<h2>Collection of all bots</h2>
					{renderedBots}
				</div>
			</div>
		);
	}

};

export default BotCollection;
