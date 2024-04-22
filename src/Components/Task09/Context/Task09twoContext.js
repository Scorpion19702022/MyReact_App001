import React, { createContext, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

const Task09twoContext = createContext()

export const Task09twoProvider = ({ children }) => {
	const [car, setCar] = useState('')
	const [carYear, setCarYear] = useState('')

	const year = new Date().getFullYear()

	const [carInfo, setCarInfo] = useState([])

	const [carTable, setCarTable] = useState([
		{
			id: uuidv4(),
			carName: '',
			carAge: '',
		},
	])

	const handleChangeCar = e => {
		setCar(e.target.value)
	}

	const handleChangeCarYear = e => {
		setCarYear(e.target.value)
	}

	return (
		<Task09twoContext.Provider value={{ car, carYear, year, handleChangeCar, handleChangeCarYear }}>
			{children}
		</Task09twoContext.Provider>
	)
}

export default Task09twoContext
