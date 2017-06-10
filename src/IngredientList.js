import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const IngredientList = ({name, ingredients}) => {
  console.log('IngredientList: name: ', name);
  console.log('IngredientList: ingredients: ', ingredients);
  return (
    <div>
      <h3>{name}</h3>
      <ListGroup>
        {ingredients.map((item, index) => {
            return (
              <ListGroupItem key={item}>{item}</ListGroupItem>
            );
          })}
      </ListGroup>
    </div>
  );
}

IngredientList.defaultProps = {
  name: '',
  ingredients: [],
}

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired,
}

export default IngredientList;
