/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, InputGroupButton } from 'reactstrap';

class RecipeModal extends Component {
  
  render() {
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
                <Input
                  id='name'
                  type='text'
                  placeholder='Recipe Name'
                />
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <Input
                    id='ingredients'
                    type='text'
                    placeholder='Ingredients'
                  />
                  <InputGroupButton>
                    <Button>+</Button>
                  </InputGroupButton>
                </InputGroup>
              </FormGroup>
            </Form>
            :
            props.recipe.name
          }
          </ModalBody>
          <ModalFooter>
            {props.addEdit ?
              <Button
                type='submit'
                color="primary"
                onClick={this.handleSubmit}
              >
                Save
              </Button>
              :
              <Button
                color='danger'
                onClick={props.delete}
              >
                Delete
              </Button>
            }
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

RecipeModal.defaultProps = {
  recipe: {name: '', ingredients: []},
  addEdit: false,
}

RecipeModal.propTypes = {
  addEdit: PropTypes.bool.isRequired,
  delete: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  recipe: PropTypes.object.isRequired,
}

export default RecipeModal;
