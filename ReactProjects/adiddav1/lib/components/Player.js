import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


const Player = (props) => {
  const {player, coach} = props;
  return(
    <div>

    <Card>
       <CardImg top width="30%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
       <CardBlock>
         <CardTitle>{coach.firstName} {coach.lastName}</CardTitle>
         <CardSubtitle>{player.address}</CardSubtitle>
         <CardText>{player.body}</CardText>
         <Button>See more...</Button>
       </CardBlock>
     </Card>


     <Jumbotron>
    <h1 className="display-3">{player.title}</h1>
      <div>{player.email}</div>
        <div>{player.body}</div>
          <div>{player.address}</div>
            <div>{player.username}</div>
              <div>{player.lastsignedin}</div>
              <div>{coach.firstName} {coach.lastName}</div>
              </Jumbotron>
    </div>
  );
};

export default Player;
