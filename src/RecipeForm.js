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

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      list: '',
    }
  }

  handleChange = (event) => {
    if (event.target.name === 'list') {
      this.setState({list: event.target.value});
    } else {
      this.setState({name: event.target.value});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(
      this.state.name,
      this.state.list
    );
  }

  render() {
    return (
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
              name='list'
              placeholder='Ingredients'
              value={this.state.list}
              onChange={this.handleChange}
            />
            <InputGroupButton>
              <Button>+</Button>
            </InputGroupButton>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

RecipeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default RecipeForm;
