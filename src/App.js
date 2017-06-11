import React, { Component } from 'react';
import './css/main.css';
import { Container, CardColumns, Button} from 'reactstrap';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      edit: false,
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
    this.setState({selected: e.target.value, edit: false});
    this.toggle();
  }

  openAddRecipe = () => {
    this.setState(() => {
      return ({edit: true});
    })
    this.toggle();
  }

  addRecipe = (name, list) => {
    console.log('addRecipe name: ', name);
    let newRecipeList = this.state.recipes;
    this.setState(()=> {
      let newRecipe = {
        name: name,
        ingredients: list,
      }
      newRecipeList.push(newRecipe);
      return {recipes: newRecipeList};
    });
    this.toggle();
  }

  deleteRecipe = () => {
    let newRecipeList = this.state.recipes;
    this.setState(()=> {
      newRecipeList.splice(this.state.selected, 1);
      return {recipes: newRecipeList};
    });
    this.toggle();
  }

  toggleEdit = () => {
    this.setState({edit: true});
  }

  render() {
    return (
      <div className="app">
        <h1>Recipe Box</h1>
        <Container>
          <Button onClick={this.openAddRecipe}>Add</Button>
          <CardColumns>
            {this.state.recipes.map((recipe, index)=> {
              return (
                <RecipeCard
                  key={recipe.name}
                  index={index}
                  recipe={recipe}
                  viewContents={this.openView}
                />
              );
            })}
          </CardColumns>
        </Container>
        <RecipeModal
          edit={this.toggleEdit}
          isEdit={this.state.edit}
          delete={this.deleteRecipe}
          toggle={this.toggle}
          modal={this.state.modal}
          recipe={this.state.recipes[this.state.selected]}
          onAdd={this.addRecipe}
        />
      </div>
    );
  }
}

export default App;
