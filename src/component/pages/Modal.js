/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalStructure = (props) => {
  const { buttonLabel, isPopup, toggle, userviewdat } = props;

  return (
    <div>
      <Modal isOpen={isPopup} toggle={toggle}>
        <ModalHeader toggle={toggle}>{buttonLabel}</ModalHeader>
        <ModalBody className="table-responsive">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{userviewdat.name}</td>
                <td>{userviewdat.username}</td>
                <td>{userviewdat.email}</td>
                <td>{userviewdat.phone}</td>
                <td>{userviewdat.website}</td>
              </tr>
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalStructure;
