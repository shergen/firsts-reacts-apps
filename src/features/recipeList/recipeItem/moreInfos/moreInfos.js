// @flow
import React, { Component } from 'react';
import './moreInfos.css';
import { Col } from 'react-bootstrap';

class moreInfos extends Component {
  active: boolean; 
  constructor (props: any) {
	super(props);
  	this.active = false;
  }
  
  set setActive(status: boolean): Object {
	this.active = status;
	return this;
  }

  get getActive(): boolean {
	return this.active;
  }

  render() {
    return (
		<Col sm={8} smOffset={2} className="more-infos-section">
			<p> title: {this.props.data.title}</p>
		</Col>
    );
  }
}

export default moreInfos;
