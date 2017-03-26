// @flow
import React, { Component } from 'react';
import './shopList.css';
//import { Button, Col } from 'react-bootstrap';
//import FA from 'react-fontawesome';

class ShopList extends Component {
  constructor (props) {
	super(props);
	this.getShopList = this.getShopList.bind(this);
	this.ingredients = [];
  }

  PrintIngredients(tab) {
	let ret;
	tab.map((object) => {
		ret = <p>{object.name}</p>;
	});
	return ret;
  }

  IngredientExist(tab, item) {
	for (let i = 0; i < tab.length ;i++) {
		if (tab[i].name === item.name) {
			tab[i].quantity += item.quantity
			return true;
		}

	}
	return false;
  }

  ListToIngredients(val) {
	let ret = [];
	val.map((object) => {
		object.map((obj) => {
			if (!this.IngredientExist(ret, obj))
				ret.push(obj);	
		});
	});
	return ret;
  }

  getShopList() {
	let ret = [];
	if (ShopRecipe !== "") {
		let ingredients = ShopRecipe.split(",");
		ingredients.map((object) => {
			if (object !== "")
				ret.push(this.props.data[object - 1].ingredients);
		});
	}
	return ret;
  }
  render() {
    return (
	<div>
		<h1>Shop list {ShopRecipe}</h1>
		<h2>{this.PrintIngredients(this.ListToIngredients(this.getShopList()))}</h2>
	</div>
    );
  }
}

export default ShopList;

let ShopRecipe: string = "";

export function setShopRecipe(val: number): void {
	ShopRecipe += val.toString() + ",";
}
