import React from 'react';
import ReactDOM from 'react-dom';
import RecipeItem from './recipeItem.js';

it('titlePreview : return good values', () => {
	let test = new RecipeItem();
	expect(test.titlePreview("12345678912345678912345678912").length).toBe(29);
	expect(test.titlePreview("1234567891234567891234567891234").length).toBe(29);

	expect(test.titlePreview("12345678912345678912345678912")).toBe("12345678912345678912345678912");
	expect(test.titlePreview("1234567891234567891234567891234")).toBe("12345678912345678912345678...");
})
