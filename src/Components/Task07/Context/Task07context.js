import { createContext } from 'react'

import cafe from '../assets/coffee.jpg'

const Task07context = createContext()

export const ActionCaffee = ({ children }) => {
	const cafeProducts = [
		{
			id: 0,
			product: 'kawa',
			price: 14,
			img: cafe,
		},
	]

	console.log(cafeProducts)

	return <Task07context.Provider value={{}}>{children}</Task07context.Provider>
}

export default Task07context
