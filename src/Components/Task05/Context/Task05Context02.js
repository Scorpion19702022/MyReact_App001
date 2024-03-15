import { createContext, useEffect, useState } from 'react'

const Task05Context02 = createContext()

export const ActionTaskContext02 = ({ children }) => {
	const [celsius, setCelsius] = useState('℃')
	const [fare, setFare] = useState('℉')

	const [stateButton, setStateButton] = useState(false)

	const [intoInput, setIntoInput] = useState('')

	// T(F) = T(C) * 1.8 + 32
	// T(C) = (T(F) - 32) / 1.8
	const [countIn, setCountIn] = useState('')
	const [resultDegrees, setResultDegrees] = useState(null)

	const handleChangeInput = e => {
		setIntoInput(e.target.value)
	}

	const handleCountDegrees = typeDegrees => {
		if (typeDegrees === '℃' && intoInput !== '') {
			setResultDegrees(+intoInput * 1.8 + 32)
			setCountIn(intoInput)
		} else if (typeDegrees === '℉' && intoInput !== '') {
			setResultDegrees((+intoInput - 32) / 1.8)
			setCountIn(intoInput)
		}
	}

	const handleClickChange = () => {
		setStateButton(!stateButton)
		if (!stateButton) {
			setCelsius('℉')
			setFare('℃')
			setResultDegrees((+intoInput - 32) / 1.8)
			// setCountIn(intoInput)
		} else if (stateButton) {
			setCelsius('℃')
			setFare('℉')
			setResultDegrees(+intoInput * 1.8 + 32)
			// setCountIn(intoInput)
		}
	}

	const handleClickReset = () => {
		setIntoInput('')
		setCelsius('℃')
		setFare('℉')
		setStateButton(false)
		setCountIn('')
		setResultDegrees(null)
	}

	return (
		<Task05Context02.Provider
			value={{
				celsius,
				fare,
				intoInput,
				handleChangeInput,
				handleClickChange,
				handleClickReset,
				handleCountDegrees,
				resultDegrees,
				countIn,
			}}
		>
			{children}
		</Task05Context02.Provider>
	)
}

export default Task05Context02
