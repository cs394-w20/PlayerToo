import React from 'react';
import { Link} from 'react-router-dom';
import { Header, Segment, Button, Icon, Container } from 'semantic-ui-react';

const RequestConfirmation = () => {

  return (
    <Container style={{ marginTop: "15px"}}>
      <Header as="h1" icon>
        <Icon color="yellow" name='check circle' />
        Game on!
        <Header.Subheader>
        Maria Woods has been notified for yor approval!
        </Header.Subheader>
        <Header.Subheader>
        {'Meet at the Barnes & Noble on Church Street.'}
        </Header.Subheader>
        <Header.Subheader>
          Happy playing!
        </Header.Subheader>
      </Header>
      <br />
      <br />
      <Button content="Back to Listings" as={Link} to="/" fluid color="yellow" />
    </Container>
  );
};

export default RequestConfirmation;