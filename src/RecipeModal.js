/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
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

const RecipeModal = (props) => {
  const isAdd = Boolean(props.recipe.name === '' && props.isEdit === true);
  console.log('isAdd recipe: ', props.recipe);
  console.log('isAdd isEdit: ', props.isEdit);
  console.log(Boolean(props.recipe.name === '' && props.isEdit === true));

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>
          {!props.isEdit && 'View Recipe'}
        </ModalHeader>
        <ModalBody>
        { props.isEdit ?
          <RecipeForm
            isEdit={props.isEdit}
            recipe={props.recipe}
            onSubmit={isAdd ? props.addRecipe : props.editRecipe}
          />
          :
          <div>
            <img src={props.recipe.image} alt='recipe' />
            <IngredientList
              name={props.recipe.name}
              ingredients={props.recipe.ingredients}
            />
          </div>
        }
        </ModalBody>
        <ModalFooter>
          {!props.isEdit &&
            <span>
              <Button
                color='danger'
                onClick={props.delete}
              >
                Delete
              </Button>
              <Button
                color='success'
                onClick={props.setEdit}
              >
                Edit
              </Button>
            </span>
          }
          <Button
            color="secondary"
            onClick={props.toggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

RecipeModal.defaultProps = {
  recipe: {name: '', image: '', ingredients: []},
}

RecipeModal.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  delete: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
}

export default RecipeModal;
