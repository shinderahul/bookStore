import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

class ModalConfirmDelete extends Component {

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} color={this.props.buttonColor}>{this.props.buttonTriggerTitle}</Button>}
        dimmer='inverted'
        size='tiny'
      >
        <Modal.Header>{this.props.headerTitle}</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete <strong>Book Name</strong>?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red'>Yes</Button>
          <Button color='black'>No</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalConfirmDelete;
