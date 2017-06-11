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
             onSubmit={this.props.onAdd}
            />
            :
            <IngredientList
              name={this.props.recipe.name}
              ingredients={this.props.recipe.ingredients}
            />
          }
          </ModalBody>
          <ModalFooter>
            {!this.props.addEdit &&
              <span>
                <Button
                  color='danger'
                  onClick={this.props.delete}
                >
                  Delete
                </Button>
                <Button color='success'>Edit</Button>
              </span>
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
