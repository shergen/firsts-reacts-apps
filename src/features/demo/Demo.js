// @flow
import React, { Component } from 'react';
import logo from './rsc/logo.svg';
import './Demo.css';
import { Button } from 'react-bootstrap';

var bool: boolean = true;
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
var maybe: ?string = null



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
	<Button>Test</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
