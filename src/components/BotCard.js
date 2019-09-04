import React from "react";

const BotCard = props => {

  /*
  props:
    armor: 63
    avatar_url: "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
    bot_class: "Support"
    catchphrase: "1010010101001101100011000111101"
    created_at: "2018-10-02T19:55:10.800Z"
    damage: 20
    health: 94
    id: 101
    name: "wHz-93"
    updated_at: "2018-10-02T19:55:10.800Z"
  */

  // This fancy line below costed me 20 minutes of debugging. I realized it was causing erros and rewrote every bot to props
  // const { bot } = props; 

  let botType;

  switch (props.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (

    <div className="ui column">
      <div
        className="ui card"
        key={props.id}
        onClick={() => props.handleClick(props)}
      >
        <div className="image">
          <img alt="oh no!" src={props.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.armor}
          </span>
        </div>
      </div>
    </div>

  );

};

export default BotCard;
