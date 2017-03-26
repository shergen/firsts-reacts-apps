// @flow
import React, { Component } from 'react';
import './shopList.css';
import type {Recipe, Ingredient } from '../App/App.js';
import { Col } from 'react-bootstrap';

type Props = {
	data: Array<Recipe>;
}

class ShopList extends Component {
  dispArr: Array<Ingredient>;
  constructor (props: Props) {
	super(props);
	(this:any).getShopList = this.getShopList.bind(this);
	this.dispArr = this.ListToIngredients(this.getShopList()).sort((a,b) => {
		return (a.department < b.department) ? -1 : (a.department > b.department) ? 1 : 0;
	})
  }

  IngredientExist(tab: Array<Ingredient>, item: Ingredient) {
	if (item) {
		for (let i = 0; i < tab.length ;i++) {
			if (tab[i].name === item.name) {
				tab[i].quantity += item.quantity
				return true;
			}

		}
	}
	return false;
  }

ListToIngredients(val: Array<any>) : Array<Ingredient> {
	let ret = [];
	if (val)
		val.map((object) => {
			object.map((obj) => {
				if (!this.IngredientExist(ret, obj))
					ret.push(obj);	
			});
		});
	return ret;
  }

  getShopList(): Array<any> {
	let ret = [];
	if (ShopRecipe !== "") {
		let ingredients = ShopRecipe.split(",");
		ingredients.map((object: string) => {
			if (object !== "")
				ret.push(this.props.data[parseInt(object) - 1].ingredients);
		});
	}
	return ret;
  }
  render() {
    return (
	<Col sm={12}>
		<h1>Shop list</h1>
		{
			this.dispArr.map((object, i) => {
				if (object.quantity) {
					return (i > 0 && object.department === this.dispArr[parseInt(i) - 1].department) ? 
						<p>{object.name} {object.quantity.toFixed(2).replace(/[.,]00$/, "")} {object.unit}</p> : 
						<p><h2>{object.department}</h2>{object.name} {object.quantity.toFixed(2).replace(/[.,]00$/, "")} {object.unit}</p>;
				}
			})

		}
	</Col>
    );
  }
}

export default ShopList;

let ShopRecipe: string = "";

export function setShopRecipe(val: number): void {
	ShopRecipe += val.toString() + ",";
}
