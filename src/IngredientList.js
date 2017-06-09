import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const IngredientList = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <ListGroup>
        {props.list.map((item, index) => {
            return (
              <ListGroupItem key={item}>{item}</ListGroupItem>
            );
          })}
      </ListGroup>
    </div>
  );
}

IngredientList.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
}

export default IngredientList;
