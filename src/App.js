import React, { Component } from 'react';
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
        App
      </div>
    );
  }
}

export default App;
