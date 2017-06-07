/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ViewRecipe = (props) => {
    return (
      <div>
        <Modal isOpen={props.modal} toggle={props.toggle}>
          <ModalHeader toggle={props.toggle}>
            {props.recipe.name}
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

ViewRecipe.defaultProps = {
  recipe: {name: '', ingredients: []},
}

ViewRecipe.propTypes = {
  toggle: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  recipe: PropTypes.object.isRequired,
}

export default ViewRecipe;
