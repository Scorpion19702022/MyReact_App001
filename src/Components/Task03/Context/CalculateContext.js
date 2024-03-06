import { createContext, useState } from 'react'

const CalculateContext = createContext()

export const AddFunctionContent = ({ children }) => {
	const [dataWeight, setDataWeight] = useState('')

	const [dataTall, setDataTall] = useState('')

	const handleChangeWeight = e => {
		setDataWeight(e.target.value)
	}

	const handleChangeTall = e => {
		setDataTall(e.target.value)
	}

	const handleClickReset = () => {
		setDataWeight('')
		setDataTall('')
	}

	return (
		<CalculateContext.Provider value={{ dataWeight, dataTall, handleChangeWeight, handleChangeTall, handleClickReset }}>
			{children}
		</CalculateContext.Provider>
	)
}

export default CalculateContext
