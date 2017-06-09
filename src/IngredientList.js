import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const IngredientList = (props) => {
  return (
    <div>
      <h3>{props.recipe.name}</h3>
      <ListGroup>
        {props.recipe.ingredients.map((item, index) => {
            return (
              <ListGroupItem key={item}>{item}</ListGroupItem>
            );
          })}
      </ListGroup>
    </div>
  );
}

IngredientList.propTypes = {
  recipe: PropTypes.object.isRequired,
}

export default IngredientList;
