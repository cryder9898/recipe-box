import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import RecipeCard from './RecipeCard';
import './css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          name: 'Chicken Parmesean',
          ingredients: ['Chicken Breast', 'Parmesean Cheese', 'Tomato Sauce', 'Bread Crumbs'],
        },
        {
          name: 'Sweet Potato Pie',
          ingredients: ['Sweet Potatoes', 'Pie Crust', 'Sugar', 'Cinnamon'],
        },
        {
          name: "Pasta Salad",
          ingredients: ['Pasta', 'celery', 'bacon', 'italian dressing', 'tomato'],
        }],
    }
  }
  render() {
    return (
      <div className="app">
        <Container>
        <h1>Recipe Box</h1>
          <Row>
            {this.state.recipes.map((recipe, index)=> {
              return (
                <div key={recipe.name}>
                  <RecipeCard
                    recipe={recipe}
                  />
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
