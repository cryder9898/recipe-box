/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const ViewRecipe = (props) => {
  console.log('edit ', props.addEdit);
    return (
      <div>
        <Modal isOpen={props.modal} toggle={props.toggle}>
          <ModalHeader toggle={props.toggle}>
            {props.addEdit ? 'Add Recipe' : 'View Recipe'}
          </ModalHeader>
          <ModalBody>
          { props.addEdit ?
            <Form>
              <FormGroup>
                <InputGroup>
                  <Input
                    type='text'
                    placeholder='Recipe Name'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <Input
                    type='text'
                    placeholder='Ingredients'
                  />
                  <InputGroupAddon>+</InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Form>
            :
            props.recipe.name
          }
          </ModalBody>
          <ModalFooter>
            <Button type='submit' color="primary" onClick={props.toggle}>
            {!props.edit ? 'Add' : 'Edit'}
            </Button>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

ViewRecipe.defaultProps = {
  recipe: {name: '', ingredients: []},
  addEdit: false,
}

ViewRecipe.propTypes = {
  addEdit: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  recipe: PropTypes.object.isRequired,
}

export default ViewRecipe;
