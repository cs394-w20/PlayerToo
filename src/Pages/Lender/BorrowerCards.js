import React, { useState } from 'react';
import { Card, Icon, Button, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeclineModal from './DeclineModal';

// function to handle approval of requests. interim until backend for requests is done
const approve = (item, isApproved) => {
  item.approved = isApproved;
  return item;
};

// TODO: error checking for double booking of dates

// individual requests from borrowers
const BorrowerCard = ({ item, state }) => {

  return (
    <Card>
      <Card.Content>
        <Image circular floated="right" size="mini" src={item.image} />
        <Card.Header>{item.borrower}</Card.Header>
        <Card.Meta>
          <Icon name="star" /> {item.borrowerRating}
        </Card.Meta>
        <Card.Description>Duration:</Card.Description>
        <Card.Description as={Header.Subheader}>
          {item.duration}
        </Card.Description>
        <Card.Description>Proposed Meeting Location:</Card.Description>
        <Card.Description as={Header.Subheader}>
          {item.meetingLoc}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group fluid>
          <Button
            color="yellow"
            onClick={() =>
              state.setBorrowers(
                state.borrowers.map(x =>
                  x.borrower === item.borrower ? approve(x, true) : x
                )
              )
            }
          >
            Approve
          </Button>
          <Button
            color="yellow"
            basic
            onClick={() =>
              state.setBorrowers(
                state.borrowers.map(x =>
                  x.borrower === item.borrower ? approve(x, false) : x
                )
              )
            }
          >
            Decline
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

// Exported Card group and modal
const BorrowerCards = ({ state }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <DeclineModal open={modalOpen} setModalOpen={setModalOpen} />
      <Card.Group centered itemsPerRow="1">
        {state.borrowers
          .filter(x => x.approved === null)
          .map(i => (
            <BorrowerCard key={i.borrower} item={i} state={state} />
          ))}
      </Card.Group>
    </div>
  );
};

export default BorrowerCards;
