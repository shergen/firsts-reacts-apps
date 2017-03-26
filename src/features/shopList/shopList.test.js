import React from 'react';
import ReactDOM from 'react-dom';
import ShopList from './shopList.js';


it('IngredientExist: return good values', () => {
	let test = new ShopList();
	let ingredient = {
                "display_index": 3,
                "name": "red onion",
                "department": "Produce",
                "quantity": 118,
                "unit": "ml"
            };
	let ingredient2 = {
                "display_index": 0,
                "name": "cherry tomatoes",
                "department": "Produce",
                "quantity": 237,
                "unit": "ml"
            };
	let listIngredient = [{
                "display_index": 0,
                "name": "cherry tomatoes",
                "department": "Produce",
                "quantity": 237,
                "unit": "ml"
            },
            {
                "display_index": 1,
                "name": "cucumber",
                "department": "Produce",
                "quantity": 237,
                "unit": "ml"
            },
            {
                "display_index": 2,
                "name": "avocado",
                "department": "Produce",
                "quantity": 1,
                "unit": ""
            }];
		
	expect(test.IngredientExist([], null)).toBe(false);
	expect(test.IngredientExist([], ingredient)).toBe(false);
	expect(test.IngredientExist(listIngredient, null)).toBe(false);
	expect(test.IngredientExist(listIngredient, ingredient)).toBe(false);
	expect(test.IngredientExist(listIngredient, ingredient2)).toBe(true);
});


it('getShopList: return good values', () => {
	let test = new ShopList();
		
});
