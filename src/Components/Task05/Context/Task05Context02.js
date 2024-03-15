import { createContext, useState } from 'react'

const Task05Context02 = createContext()

export const ActionTaskContext02 = ({ children }) => {
	const [celsius, setCelsius] = useState('℃')
	const [fare, setFare] = useState('℉')

	const [stateButton, setStateButton] = useState(false)

	const [intoInput, setIntoInput] = useState('')

	// T(F) = T(C) * 1.8 + 32
	// T(C) = (T(F) - 32) / 1.8

	const [resultDegrees, setResultDegrees] = useState(null)

	const handleChangeInput = e => {
		setIntoInput(e.target.value)
	}

	const handleCountDegrees = typeDegrees => {
		if (typeDegrees === '℃') {
			console.log('celsius')
		} else if (typeDegrees === '℉') {
			console.log('fare')
		}
	}

	const handleClickChange = () => {
		setStateButton(!stateButton)
		if (!stateButton) {
			setCelsius('℉')
			setFare('℃')
		} else if (stateButton) {
			setCelsius('℃')
			setFare('℉')
		}
	}

	const handleClickReset = () => {
		setIntoInput('')
		setCelsius('℃')
		setFare('℉')
		setStateButton(false)
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
			}}
		>
			{children}
		</Task05Context02.Provider>
	)
}

export default Task05Context02
