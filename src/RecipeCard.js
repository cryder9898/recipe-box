import React from 'react';
import {
  Card,
  CardImg,
  CardBlock,
  CardText,
  Button
} from 'reactstrap';

const RecipeCard = (props) => {
  return (
    <div>
      <Card block inverse color='info'>
        <CardImg
          top
          width="100%"
          src={props.recipe.image}
          alt="Card image cap"
        />
        <CardBlock>
          <CardText>{props.recipe.name}</CardText>
          <Button
            value={props.index}
            onClick={props.viewContents}
          >
            View
          </Button>
        </CardBlock>
      </Card>
    </div>
  );
};

export default RecipeCard;
