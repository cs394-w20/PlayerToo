import React, { useState, useEffect } from 'react';
import { Card, Icon, Header, Button, Image, Grid, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {getDuration} from '../../utils/TimeFunctions'

const EachRequest = ({ data, games, users }) => {

  const [eachGameRequests, setEachGameRequests] = useState([]);
  console.log(data)
  useEffect(() => {
    const permittedValues = [];
    for (let i = 0; i < data.length; i++) {
      let temp = data[i]["requests"]
      let game = data[i]["game_id"]
      //let date = 
      for (let j = 0; j < temp.length; j++) {
        permittedValues.push([temp[j], game]);
      }
    }
    console.log(permittedValues)
    setEachGameRequests(permittedValues);
  }, []);

  console.log(eachGameRequests)
  

  function ApproveRequest () {
    console.log("I approved the Request");
  }
  
  function DenyRequest({game}) {
    console.log("I denied the Request");
    // console.log(game[0].startDate._seconds)
    // console.log(new Date(game[0].startDate), Date(game[0].startDate))
    // let avar = game[0].startDate;
    // console.log(avar)
  }
  return (
    <Card.Group itemsPerRow={1}>
      {eachGameRequests.map(game =>
        <Card
          fluid
          centered
        >
          <Card.Content>
            <Grid columns={2}>
              <Grid.Column width={3}>
                <Image.Group size="tiny">
                  <Image src={games[games.findIndex(g => g.id === game[1])].images.thumb}/>
                </Image.Group>
              </Grid.Column>
              <Grid.Column width={13}>
                <Header as="h3">
                {users[users.findIndex(u => u.id === game[0].borrower)].name + " requests:"}
                  <Header.Subheader style={{ color: "grey", fontWeight: "bold", fontSize: "16px" }}>
                  {games[games.findIndex(g => g.id === game[1])].name}
                  </Header.Subheader>
                </Header>
              </Grid.Column>
            </Grid>
          </Card.Content>
          <Card.Content>
          <Card.Meta>
          <Icon name="star" />
        </Card.Meta>
        <Card.Description>Duration:</Card.Description>
        <Card.Description as={Header.Subheader}>{getDuration(game[0].startDate, game[0].duration)}</Card.Description>
        <Card.Description>Proposed Meeting Location:</Card.Description>
        <Card.Description as={Header.Subheader}>
          
            {'Starbucks, 1901 Dempster St'}
        </Card.Description>
      </Card.Content>
          <Card.Content textAlign="center">
          <Button.Group fluid>
          <Button
            color="yellow"
            onClick={() => ApproveRequest()
            }
          >
            Approve
          </Button>
          <Button
            color="yellow"
            basic
            onClick={() => DenyRequest()}
          >
            Decline
          </Button>
        </Button.Group>
          </Card.Content>
        </Card>
      )}
    </Card.Group>
  );
};

export default EachRequest;