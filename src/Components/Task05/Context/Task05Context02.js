import { createContext, useEffect, useState } from 'react'

const Task05Context02 = createContext()

export const ActionTaskContext02 = ({ children }) => {
	const [celsius, setCelsius] = useState('℃')
	const [fare, setFare] = useState('℉')

	const [stateButton, setStateButton] = useState(false)

	const [intoInput, setIntoInput] = useState('')

	const handleChangeInput = e => {
		setIntoInput(e.target.value)
	}

	const handleClickReset = () => {
		setIntoInput('')
		setCelsius('℃')
		setFare('℉')
	}

	const handleClickChange = () => {
		setStateButton(!stateButton)
	}

	useEffect(() => {
		if (!stateButton && celsius === '℃') {
			setCelsius('℉')
			// setFare('℃')
			// console.log('klik 1')
		} else if (stateButton && fare === '℉') {
			setCelsius('℃')
			// setFare('℉')
			// console.log('klik 2')
		}
	}, [stateButton, celsius, fare])

	return (
		<Task05Context02.Provider
			value={{ celsius, fare, intoInput, handleChangeInput, handleClickChange, handleClickReset }}
		>
			{children}
		</Task05Context02.Provider>
	)
}

export default Task05Context02