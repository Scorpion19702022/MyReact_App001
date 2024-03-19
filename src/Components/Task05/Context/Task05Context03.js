import { createContext, useState } from 'react'

const Task05Context03 = createContext()

export const ActionTaskContext03 = ({ children }) => {
	const [yourName, setYourName] = useState('')
	const [infoName, setInfoName] = useState('')

	const [error, setError] = useState('')

	const handleChangeYourName = e => {
		setYourName(e.target.value)
	}

	const handleClickInfoVacation = () => {
		if (yourName !== '') {
			setInfoName(yourName)
			setError('')
		} else if (yourName === '') {
			setError('wypełnij poprawnie wszystkie pola')
		}
	}

	const handleCleanInputs = () => {
		setYourName('')
		setInfoName('')
		setError('')
	}

	return (
		<Task05Context03.Provider
			value={{ yourName, infoName, error, handleChangeYourName, handleClickInfoVacation, handleCleanInputs }}
		>
			{children}
		</Task05Context03.Provider>
	)
}

export default Task05Context03
