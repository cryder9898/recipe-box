import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

var recipes;

if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
  console.log(localStorage);
  if (localStorage.length === 0) {
    console.log('nothing stored!!!!');
    recipes = [
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
      }
    ];
    localStorage.setItem('recipes', recipes);
} else {
    console.log('localStorage  YESS!!');
    recipes = JSON.parse(localStorage.getItem('recipes'));
  }
} else {
  /// no browser support
}

console.log('recipes: ', recipes);
ReactDOM.render(<App recipes={recipes}/>, document.getElementById('root'));
registerServiceWorker();
