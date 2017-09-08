import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import FormUser from '../FormUser/'

class ModalUser extends React.Component {


  render() {
    const triggerButton = <Button color={this.props.buttonColor}>{this.props.buttonTriggerTitle}</Button>
    return (
      <Modal
        trigger={triggerButton}
        dimmer='inverted'
        size='tiny'
        closeIcon='close'
      >
        <Modal.Header>{this.props.headerTitle}</Modal.Header>
        <Modal.Content>
          <FormUser
            buttonSubmitTitle={this.props.buttonSubmitTitle}
            buttonColor={this.props.buttonColor}
            userID={this.props.userID}
            onUserAdded={this.props.onUserAdded}
            onUserUpdated={this.props.onUserUpdated}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalUser;
