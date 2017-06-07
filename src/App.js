import React, { Component } from 'react';
import './css/main.css';
import { Container, Row} from 'reactstrap';
import RecipeCard from './RecipeCard';
import ViewRecipe from './ViewRecipe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selected: null,
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

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  openView = (e) => {
    console.log('selected: ', e.target.value);
    this.setState({selected: e.target.value});
    this.toggle();
  }

  render() {
    return (
      <div className="app">
        <h1>Recipe Box</h1>
        <Container>
          <Row>
            {this.state.recipes.map((recipe, index)=> {
              return (
                <RecipeCard
                  key={recipe.name}
                  index={index}
                  recipe={recipe}
                  viewRecipe={this.openView}
                />
              );
            })}
          </Row>
        </Container>
        <ViewRecipe
          toggle={this.toggle}
          modal={this.state.modal}
          recipe={this.state.recipes[this.state.selected]}
        />
      </div>
    );
  }
}

export default App;
