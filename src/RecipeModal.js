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
            {this.props.isEdit ? 'Add Recipe' : 'View Recipe'}
          </ModalHeader>
          <ModalBody>
          { this.props.isEdit ?
            <RecipeForm
              isEdit={this.props.isEdit}
              recipe={this.props.recipe}
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
            {!this.props.isEdit &&
              <span>
                <Button
                  color='danger'
                  onClick={this.props.delete}
                >
                  Delete
                </Button>
                <Button
                  color='success'
                  onClick={this.props.edit}
                >
                  Edit
                </Button>
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
  isEdit: false,
}

RecipeModal.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  delete: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  recipe: PropTypes.object.isRequired,
}

export default RecipeModal;
