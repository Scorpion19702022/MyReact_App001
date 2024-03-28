import { createContext, useState } from 'react'

import cafe from '../assets/coffee.jpg'
import tea from '../assets/tea.jpg'
import water from '../assets/water.jpg'
import cola from '../assets/cola.jpg'
import beer from '../assets/beer.jpg'

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
	]

	const [table, setTable] = useState([])

	const Test = prices => {
		const price = cafeProducts.find(itemPrice => itemPrice.price === prices)
		console.log(price.price)
		setTable([...table, price.price])
	}
	console.log(table)

	return <Task07context.Provider value={{ cafeProducts, table, Test }}>{children}</Task07context.Provider>
}

export default Task07context
