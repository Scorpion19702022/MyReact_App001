import { createContext, useState } from 'react'

const SalaryContext = createContext()

export const CalculateSalaryCotext = ({ children }) => {
	const [inputValue, setInputValue] = useState('')

	const handleChangeValueInput = e => {
		setInputValue(e.target.value)
	}

	return <SalaryContext.Provider value={{ inputValue, handleChangeValueInput }}>{children}</SalaryContext.Provider>
}

export default SalaryContext
