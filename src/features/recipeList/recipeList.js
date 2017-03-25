// @flow
import React, { Component } from 'react';
import './recipeList.css';
import App from '../App/App.js'
import { Button, Col } from 'react-bootstrap';
import FA from 'react-fontawesome';

class recipeList extends Component {
  titlePreview(title: string): string { 
	for (let i: number = 0; i < title.length; i++)
		if (i > 30)	
			return title.slice(0, 26) + "...";
	return title;
  }
  dispMoreInfo(): void {
  }
  render() {
    return (
		<Col sm={4} className="recipeList">
			<img src={'/images/'+this.props.data.image_name}></img>
			<div className="infos-section">
				<h1>{this.titlePreview(this.props.data.title)}</h1>
				<Button onClick={this.dispMoreInfo()}><FA name="search-plus" /></Button>
			</div>
		</Col>
    );
  }
}

export default recipeList;
