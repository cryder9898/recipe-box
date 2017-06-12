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
      list: this.props.recipe.ingredients,
      listItem: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.list);
  }

  handleChange = (event) => {
    if (event.target.name === 'listItem') {
      this.setState({listItem: event.target.value});
    } else {
      this.setState({name: event.target.value});
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
        </Form>
        <IngredientList
          isEdit={this.props.isEdit}
          removeIngredient={this.removeIngredient}
          name={this.state.name}
          ingredients={this.state.list}
        />
      </div>
    );
  }
}

RecipeForm.defaultProps = {
  recipe: {
    name: '',
    list: [],
    listItem: '',
  }
}

RecipeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default RecipeForm;
