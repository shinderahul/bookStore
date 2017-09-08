import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import logo from './logo.svg';

const HeaderUi = () => (
  <Segment inverted clearing>
    <Header as='h2' floated='right' inverted color='grey'>
      Work In Progress
    </Header>
    <Header as='h2' floated='left' inverted color='grey'>
      <img src={logo} className="App-logo" alt="logo" />
      Book List
    </Header>
  </Segment>
)

export default HeaderUi
