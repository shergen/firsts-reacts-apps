// @flow
import React, { Component } from 'react';
import moreInfos from './moreInfos/moreInfos.js'
import './recipeItem.css';
import { Button, Col } from 'react-bootstrap';
import FA from 'react-fontawesome';
import { setShopRecipe } from '../../shopList/shopList.js';
import type {Recipe, Ingredient} from '../../App/App.js';

type Props = {
	data: Array<Recipe>;
};

class recipeItem extends Component {
  constructor (props: Props) {
	super(props);
	(this:any).dispMoreInfo = this.dispMoreInfo.bind(this);
  }
  titlePreview(title: string): string { 
	for (let i: number = 0; i < title.length; i++)
		if (i > 30)	
			return title.slice(0, 26) + "...";
	return title;
  }
  dispMoreInfo(): void {
	setShopRecipe(this.props.data.recipe_id);
  }
  render() {
    return (
		<Col sm={4} className="recipeList">
			<img src={'/images/'+this.props.data.image_name} alt={"Recipe_"+this.props.data.title}></img>
			<div className="infos-section">
				<h1>{this.titlePreview(this.props.data.title)}</h1>
				<Button onClick={this.dispMoreInfo}><FA name="cart-plus" /></Button>
				<moreInfos data={this.props.data} />
			</div>
		</Col>
    );
  }
}

export default recipeItem;
