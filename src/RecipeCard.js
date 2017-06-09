import React from 'react';
import { Card, CardImg, CardBlock, CardTitle, Button } from 'reactstrap';

const RecipeCard = (props) => {
  return (
    <div>
      <Card block inverse color='success'>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>{props.recipe.name}</CardTitle>
          <Button value={props.index} onClick={props.viewContents}>View</Button>
        </CardBlock>
      </Card>
    </div>
  );
};

export default RecipeCard;
