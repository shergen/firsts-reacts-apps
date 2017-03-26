// @flow
import React, { Component } from 'react';
import logo from './rsc/logo.svg';
import './App.css';
import { Col } from 'react-bootstrap';
import RecipeList from '../recipeList/recipeList.js'
import ShopList from '../shopList/shopList.js'
import DATA from '../recipeList/rsc/recipes.js';
import Header from '../header/header.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'

/*var bool: boolean = true;
var nb: number = NaN;
var str: string = "Flow type tests";
var nul: null = null;
var undefine: void = undefined;
var ArrayOfString: Array<string> = ["Flow","type","test"];
var ArrayOfInt: Array<number> = [12, 10, NaN];
var obj: { str: string, nb: number } = {str: "test", nb: NaN};
var map: { [slug: string]: number} = {test: 12, lol: NaN};
var any:any = "L"+337;
var func = function (arg: number): string {
	return "try smth smooth" + arg;
};
var test = async function MayTheForceBeWithYou(yourKindbness: string, func: (arg: number)=> string):Promise<string> {
	var test = await func(12);
	return "MayTheForceBeWithYou" + test;
};

type email = string;
var ownType: email = "esm@ssmproject.com";

type testType<ptr> = ptr;
type testObj<ptr> = {test: ptr};
var val: testType<string> = "blabl";
var objTest: testObj<string> = {test: "azeazea"};
var maybe: ?string = null*/


export type Ingredient = {
	display_index: number,
	name: string,
	department: string,
	quantity: number,
	unit: string	
};

export type Recipe = {
	recipe_id: number,
	title: string,
	image_name: string,
	instructions: string,
	servings: string,
	ingredients: Array<Ingredient>
};

class App extends Component {
  data: Array<Recipe>;
  constructor (props: void) {
	super(props);
	this.data = DATA;
  }

  get getData(): Array<Recipe> {
	return this.data;
  }

  set setData(data: Array<Recipe>): App {
	this.data = data;
	return this;
  }


  render() {
    return (
	<Router>
      		<div className="App">
        		<div className="App-header">
          			<img src={logo} className="App-logo" alt="logo" />
          			<h2>Welcome to React</h2>
        		</div>
			<Header />
			<Col sm={10} smOffset={1}>
				<Route exact={true} path="/" render={() => (
					<RecipeList data={this.data} />
				)} />
				<Route path="/shop" render={() => (
					<ShopList data={this.data} />
				)} />
			</Col>
	
      		</div>
	</Router>
    );
  }
}

export default App;
