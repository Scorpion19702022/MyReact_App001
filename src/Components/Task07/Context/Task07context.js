import { createContext, useEffect, useState } from 'react'

import cafe from '../assets/coffee.jpg'
import tea from '../assets/tea.jpg'
import water from '../assets/water.jpg'
import cola from '../assets/cola.jpg'
import beer from '../assets/beer.jpg'
import wine from '../assets/wine.jpg'
import vodka from '../assets/vodka.jpg'
import whisky from '../assets/whisky.jpg'
import pie from '../assets/pie.jpg'
import tost from '../assets/tost.jpg'
import sandwich from '../assets/sandwich.jpg'

import { v4 as uuidv4 } from 'uuid'

const Task07context = createContext()

export const ActionCaffee = ({ children }) => {
	const cafeProducts = [
		{
			id: 0,
			product: 'kawa',
			price: 14,
			img: cafe,
		},
		{
			id: 1,
			product: 'herbata',
			price: 8,
			img: tea,
		},
		{
			id: 2,
			product: 'woda mineralna',
			price: 5,
			img: water,
		},
		{
			id: 3,
			product: 'coca-cola',
			price: 10,
			img: cola,
		},
		{
			id: 4,
			product: 'piwo',
			price: 18,
			img: beer,
		},
		{
			id: 5,
			product: 'wino',
			price: 32,
			img: wine,
		},
		{
			id: 6,
			product: 'wódka',
			price: 50,
			img: vodka,
		},
		{
			id: 7,
			product: 'whysky',
			price: 50,
			img: whisky,
		},
		{
			id: 8,
			product: 'ciasto',
			price: 11,
			img: pie,
		},
		{
			id: 9,
			product: 'tosty',
			price: 10,
			img: tost,
		},
		{
			id: 10,
			product: 'kanapka',
			price: 15,
			img: sandwich,
		},
	]

	const [arrayPrice, setArrayPrice] = useState([])
	const [quanity, setQuanity] = useState(0)
	const [yourProduct, setYourProduct] = useState([])

	const [cost, setCost] = useState(0)

	useEffect(() => {
		setQuanity(yourProduct.length)
	}, [yourProduct.length])

	useEffect(() => {
		setArrayPrice(yourProduct.map(item => item.price))
	}, [yourProduct])

	useEffect(() => {
		setCost(arrayPrice.reduce((a, b) => a + b, 0))
	}, [arrayPrice])

	const handlePriceOrder = (prices, products) => {
		// const price = cafeProducts.find(itemPrice => itemPrice.price === prices)
		const product = cafeProducts.find(itemProduct => itemProduct.product === products)
		// setArrayPrice([...arrayPrice, price.price])
		if (product) {
			setYourProduct([...yourProduct, { id: uuidv4(), product: product.product, price: product.price }])
			// setArrayPrice(yourProduct.map(item => item.price))
		}
	}

	const handleDeleteOrder = id => {
		const updatedOrders = yourProduct.filter(item => item.id !== id)
		setYourProduct(updatedOrders)
	}

	return (
		<Task07context.Provider
			value={{ cafeProducts, arrayPrice, quanity, yourProduct, handlePriceOrder, handleDeleteOrder, cost }}
		>
			{children}
		</Task07context.Provider>
	)
}

export default Task07context
