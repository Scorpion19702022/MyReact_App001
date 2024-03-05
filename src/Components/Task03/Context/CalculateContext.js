import { createContext, useState } from 'react'

const CalculateContext = createContext()

export const AddFunctionContent = ({ children }) => {
	const [dataWeight, setDataWeight] = useState('')

	const handleChangeWeight = e => {
		setDataWeight(e.target.value)
	}

	return <CalculateContext.Provider value={{ dataWeight, handleChangeWeight }}>{children}</CalculateContext.Provider>
}
