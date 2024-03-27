import { createContext } from 'react'

import cafe from '../assets/coffee.jpg'
import tea from '../assets/tea.jpg'

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
	]

	return <Task07context.Provider value={{ cafeProducts }}>{children}</Task07context.Provider>
}

export default Task07context
