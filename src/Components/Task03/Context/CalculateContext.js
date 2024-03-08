import { createContext, useEffect, useState } from 'react'

const CalculateContext = createContext()

export const AddFunctionContent = ({ children }) => {
	const [dataWeight, setDataWeight] = useState('')

	const [dataTall, setDataTall] = useState('')

	const [result, setResult] = useState(null)

	const [info, setInfo] = useState('')

	const handleChangeWeight = e => {
		setDataWeight(e.target.value)
	}

	const handleChangeTall = e => {
		setDataTall(e.target.value)
	}

	useEffect(() => {
		if (result > 0 && result <= 16) {
			setInfo('stan wygłodzenia')
		} else if (result > 16 && result <= 16.99) {
			setInfo('wychudzenie')
		} else if (result > 17 && result <= 18.49) {
			setInfo('niedowaga')
		}
	}, [result])

	const handleResult = () => {
		setResult((dataWeight / Math.pow(dataTall / 100, 2)).toFixed(2))
		if (result === 0 || dataWeight === '' || dataTall === '') {
			setInfo('wypełnij poprawnie wszystkie pola')
			setResult(null)
		}
	}

	const handleClickReset = () => {
		setDataWeight('')
		setDataTall('')
		setResult(null)
		setInfo('')
	}

	return (
		<CalculateContext.Provider
			value={{
				dataWeight,
				dataTall,
				result,
				info,
				handleChangeWeight,
				handleChangeTall,
				handleClickReset,
				handleResult,
			}}
		>
			{children}
		</CalculateContext.Provider>
	)
}

export default CalculateContext
