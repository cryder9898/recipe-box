import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';

const IngredientList = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <ListGroup>
        {props.ingredients.map((item, index) => {
            return (
              <ListGroupItem key={item}>
                <div className='align-left'>
                  {item}
                </div>
                {props.isEdit &&
                  <div className='align-right'>
                    <Button
                      type='button'
                      className='align-right'
                      color='danger'
                      onClick={props.removeIngredient(index)}
                    >
                      X
                    </Button>
                  </div>
                }
              </ListGroupItem>
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
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
}

export default IngredientList;
