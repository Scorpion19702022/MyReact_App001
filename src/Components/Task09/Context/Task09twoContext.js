import React, { createContext, useState } from 'react'

const Task09twoContext = createContext()

export const Task09twoProvider = ({ children }) => {
	const [car, setCar] = useState('')
	const [carYear, setCarYear] = useState('')

	const year = new Date().getFullYear()

	return <Task09twoContext.Provider value={{}}>{children}</Task09twoContext.Provider>
}

export default Task09twoContext
