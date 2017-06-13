import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

var recipes;

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
  // Code for localStorage/sessionStorage.
  console.log(localStorage);
  if (!localStorage.getItem('recipes')) {
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
    localStorage.setItem('recipes', JSON.stringify(recipes));
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
