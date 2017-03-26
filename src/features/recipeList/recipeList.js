// @flow
import React, { Component } from 'react';
import './recipeList.css';
import RecipeItem from './recipeItem/recipeItem.js';
import type {Recipe, Ingredient} from '../App/App.js';

class recipeList extends Component {
  render() {
    return (
	<div>
	{
	this.props.data.map(function(object: Recipe, i: number) {
		return <RecipeItem data={object} key={i} />;
	})
	}
	</div>
    );
  }
}

export default recipeList;
