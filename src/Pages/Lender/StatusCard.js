import React, { useState } from 'react';
import { Card, Icon, Button, Image, Header, Rating } from 'semantic-ui-react';
import AcceptModal from './AcceptModal';
import { getDuration } from '../../utils/TimeFunctions';

const openRateModal = () => {
  //code for modal here:
  //TBD: Rating/Reporting - at the end, remove the request from the approved request area
};

const ConfirmButton = ({ state }) => {
  let btn = null;
  switch (state.confirmState) {
    // Lender confirms passing game to borrower
    case 0:
      btn = (
        <Button fluid color="yellow" onClick={() => state.setConfirmState(1)}>
          I have passed my game to {state.user.name}
        </Button>
      );
      break;
    // Confirmation
    case 1:
      btn = (
        <Button.Group fluid>
          <Button color="yellow" onClick={() => state.setConfirmState(2)}>
            Confirm lending
          </Button>
          <Button color="yellow" basic onClick={() => state.setConfirmState(0)}>
            Cancel
          </Button>
        </Button.Group>
      );
      break;
    // Lender confirms game has been returned
    case 2:
      btn = (
        <Button fluid color="yellow" onClick={() => state.setConfirmState(3)}>
          {state.user.name} has returned my game
        </Button>
      );
      break;
    // Confirmation
    case 3:
      btn = (
        <Button.Group fluid>
          <Button color="yellow" onClick={() => state.setConfirmState(4)}>
            Confirm return
          </Button>
          <Button color="yellow" basic onClick={() => state.setConfirmState(2)}>
            Cancel
          </Button>
        </Button.Group>
      );
      break;
    case 4:
      btn = (
        <Button color="yellow" fluid onClick={() => openRateModal()}>
          Rate {state.user.name}
        </Button>
      );
      break;
    default:
      break;
  }
  return btn;
};

// This card shows when on loan
const OnLoanCard = ({ request, action, setLocation, users }) => {
  const user = users.filter(u => request.borrower === u.id)[0];

  const duration = getDuration(request.startDate, request.duration);

  const [confirmState, setConfirmState] = useState(0);

  function launchModal() {
    action(true);
    setLocation(request.meetingLoc);
  }

  return (
    <Card>
      <Card.Content>
        <Image circular floated="right" size="mini" src={user.display_pic} />
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <Rating defaultRating={user.rating} maxRating="5" disabled />
        </Card.Meta>
        <Card.Description>Duration:</Card.Description>
        <Card.Description as={Header.Subheader}>{duration}</Card.Description>
        <Card.Description>Proposed Meeting Location:</Card.Description>
        <Card.Description as={Header.Subheader}>
          {request.meetingLoc
            ? request.meetingLoc
            : 'Starbucks, 1901 Dempster St'}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button fluid color="yellow" basic onClick={() => launchModal()} disabled={confirmState > 1}>
          Edit additional details
        </Button>
        <br />
        <ConfirmButton state={{ confirmState, setConfirmState, user }} />
      </Card.Content>
    </Card>
  );
};

// This card shows when available
const AvailableCard = () => {
  return (
    <Card>
      <Card.Content>
        <Card.Header as={Header} icon textAlign="center">
          <Icon name="user outline" circular />
          There are no approved requests for your game yet!
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

// Exported cardgroup holder
const StatusCard = ({ state }) => {
  const approvedRequests = state.requests.filter(x => x.isApproved === true);
  const [modalOpen, setModalOpen] = useState(false);
  const [meetUplocation, setmeetUpLocation] = useState(0);
  return approvedRequests.length > 0 ? (
    <div>
      <AcceptModal
        open={modalOpen}
        setModalOpen={setModalOpen}
        meetUpLocation={meetUplocation}
      />
      <Card.Group centered itemsPerRow="1">
        {approvedRequests.map(r => (
          <OnLoanCard
            key={r.borrower}
            request={r}
            action={setModalOpen}
            setLocation={setmeetUpLocation}
            users={state.users}
          />
        ))}
      </Card.Group>
    </div>
  ) : (
    <Card.Group centered itemsPerRow="1">
      <AvailableCard />
    </Card.Group>
  );
};

export default StatusCard;
