/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import RecipeForm from './RecipeForm';
import IngredientList from './IngredientList';

class RecipeModal extends Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>
            {this.props.addEdit ? 'Add Recipe' : 'View Recipe'}
          </ModalHeader>
          <ModalBody>
          { this.props.addEdit ?
            <RecipeForm
              onSubmit={this.props.onSubmit}
            />
            :
            <IngredientList
              recipe={this.props.recipe}
            />
          }
          </ModalBody>
          <ModalFooter>
            {this.props.addEdit ?
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
                onClick={this.props.delete}
              >
                Delete
              </Button>
            }
            <Button
              color="secondary"
              onClick={this.props.toggle}
            >
              Cancel
            </Button>
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
