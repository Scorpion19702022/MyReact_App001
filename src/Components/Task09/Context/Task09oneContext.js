import { createContext, useState } from 'react'

const Task09oneContext = createContext()

export const Task09oneProvider = ({ children }) => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState('')

	// const [errorAge, setErrorAge] = useState(null)

	const handleChangeFirstName = e => {
		setFirstName(e.target.value)
	}

	const handleChangeLastName = e => {
		setLastName(e.target.value)
	}

	const handleChangeAge = e => {
		setAge(e.target.value)
	}

	console.log(firstName)
	console.log(lastName)
	console.log(age)

	return (
		<Task09oneContext.Provider
			value={{ firstName, lastName, age, handleChangeFirstName, handleChangeLastName, handleChangeAge }}
		>
			{children}
		</Task09oneContext.Provider>
	)
}

export default Task09oneContext
