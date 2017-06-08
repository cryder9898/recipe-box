/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  InputGroupButton
} from 'reactstrap';

class RecipeModal extends Component {
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
      this.state.foodList
    );
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>
            {this.props.addEdit ? 'Add Recipe' : 'View Recipe'}
          </ModalHeader>
          <ModalBody>
          { this.props.addEdit ?
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
            :
            this.props.recipe.name
          }
          </ModalBody>
          <ModalFooter>
            {this.props.addEdit ?
              <Button
                type='submit'
                color="primary"
                onClick={this.handleSubmit}
              >
                Save
              </Button>
              :
              <Button
                color='danger'
                onClick={this.props.delete}
              >
                Delete
              </Button>
            }
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

RecipeModal.defaultProps = {
  recipe: {name: '', ingredients: []},
  addEdit: false,
}

RecipeModal.propTypes = {
  addEdit: PropTypes.bool.isRequired,
  delete: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  recipe: PropTypes.object.isRequired,
}

export default RecipeModal;
