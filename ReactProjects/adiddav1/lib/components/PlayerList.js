import React from 'react';
import Player from './Player';

const PlayerList = (props) => {
    return (
      <div>
      {Object.values(props.players).map(player =>
        <Player
        key={player.id}
        player ={player}
        coach = {props.coaches[player.coachId]} />
      )};
      </div>
    );
};

export default PlayerList;
