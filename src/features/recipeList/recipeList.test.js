import React from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './recipeList.js';

it('renders without crashing with empty List', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipeList />, div);
});
