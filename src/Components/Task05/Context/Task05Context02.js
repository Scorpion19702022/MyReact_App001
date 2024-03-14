import { createContext, useState } from 'react'

const Task05Context02 = createContext()

export const ActionTaskContext02 = ({ children }) => {
	const [celsius, setCelsius] = useState('℃')
	const [fare, setFare] = useState('℉')

	const [stateButton, setStateButton] = useState(false)

	const [intoInput, setIntoInput] = useState('')

	const handleChangeInput = e => {
		setIntoInput(e.target.value)
	}

	const handleClickChange = () => {
		setStateButton(!stateButton)
		if (!stateButton) {
			setCelsius('℉')
			setFare('℃')
		} else {
			setCelsius('℃')
			setFare('℉')
		}
	}

	return (
		<Task05Context02.Provider value={{ celsius, fare, intoInput, handleChangeInput, handleClickChange }}>
			{children}
		</Task05Context02.Provider>
	)
}

export default Task05Context02
