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
      edit: true,
      selected: null,
      recipes: this.props.recipes,
    }
  }

  store = () => {
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
    console.log('updating localStorage!!', this.props.recipes);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  setEdit = () => {
    this.setState({edit: true});
    console.log('Edit/AddRecipe', this.state.edit);
  }

  openView = (event) => {
    let recipe = event.target.value;
    console.log('Viewing Recipe!!', recipe);
    this.setState({selected: recipe, edit: false});
    this.toggle();
  }

  openAddRecipe = () => {
    this.setState({edit: true, selected: null});
    console.log('openAddRecipe: edit = ', this.state.edit);
    console.log('openAddRecipe: selected= ', this.state.selected);
    console.log('recipe[selected] === undefined', this.state.recipes[this.state.selected] === undefined);
    this.toggle();
  }

  editRecipe = (name, list) => {
    console.log('Editing Recipe!!!');
    console.log('editRecipe:  name: ', name);
    console.log('editRecipe: edit = ', this.state.edit);
    let newRecipeList = this.state.recipes;
    this.setState(()=> {
      let newRecipe = {
        name: name,
        ingredients: list,
      }
      newRecipeList[this.state.selected] = newRecipe;
      this.store();
      return {recipes: newRecipeList};
    });
    this.toggle();
  }

  addRecipe = (name, list) => {
    console.log('Adding New Recipe!!!');
    console.log('addRecipe: name= ', name);
    console.log('addRecipe: edit= ', this.state.edit);
    let newRecipeList = this.state.recipes;
    this.setState(()=> {
      let newRecipe = {
        name: name,
        ingredients: list,
      }
      newRecipeList.unshift(newRecipe);
      this.store();
      return {recipes: newRecipeList, selected: null};
    });
    console.log('Recipes After ADD ', this.state.recipes);
    this.toggle();
  }

  deleteRecipe = () => {
    let newRecipeList = this.props.recipes;
    this.setState(()=> {
      newRecipeList.splice(this.state.selected, 1);
      return {recipes: newRecipeList};
    });
    this.store();
    this.toggle();
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
          setEdit={this.setEdit}
          isEdit={this.state.edit}
          delete={this.deleteRecipe}
          toggle={this.toggle}
          modal={this.state.modal}
          recipe={
            this.state.selected === null ?
            {name: '', ingredients: []} :
            this.state.recipes[this.state.selected]
          }
          addRecipe={this.addRecipe}
          editRecipe={this.editRecipe}
        />
      </div>
    );
  }
}

export default App;
