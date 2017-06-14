import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Button,
  Input,
  InputGroup,
  InputGroupButton
} from 'reactstrap';
import IngredientList from './IngredientList';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.recipe.name,
      image: this.props.recipe.image,
      list: this.props.recipe.ingredients,
      listItem: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name !== '') {
      this.props.onSubmit(
        this.state.name,
        this.state.image,
        this.state.list
      );
    }
  }

  handleChange = (event) => {
    let name = event.target.name;
    switch(name) {
      case 'listItem':
        this.setState({listItem: event.target.value});
        break;
      case 'name':
        this.setState({name: event.target.value});
        break;
      case 'image':
        this.setState({image: event.target.value});
        break;
    }
  }

  addItemtoList = () => {
    if (this.state.listItem !== '') {
      let arr = this.state.list;
      arr.unshift(this.state.listItem);
      this.setState({list: arr, listItem:''});
      console.log('RecipeForm: this.state.list = ', this.state.list);
    }
  }

  removeIngredient = (event) => {
    let index = event.target.value;
    console.log('removeIngredient: ', index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({list: list});
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Input
              type='text'
              name='name'
              placeholder='Recipe Name'
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Input
              type='text'
              name='image'
              placeholder='Image src'
              value={this.state.image}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <Input
                type='text'
                name='listItem'
                placeholder='Ingredients'
                value={this.state.listItem}
                onChange={this.handleChange}
              />
              <InputGroupButton>
                <Button onClick={this.addItemtoList}>
                  +
                </Button>
              </InputGroupButton>
            </InputGroup>
          </FormGroup>
          <Button
            type='submit'
            color="primary"
            onClick={this.handleSubmit}
          >
            Save
          </Button>
          <IngredientList
            isEdit={this.props.isEdit}
            removeIngredient={this.removeIngredient}
            name={this.state.name}
            ingredients={this.state.list}
          />
        </Form>
      </div>
    );
  }
}

RecipeForm.defaultProps = {
  recipe: {
    name: '',
    image: '',
    list: [],
    listItem: '',
  }
}

RecipeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default RecipeForm;
