import { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Task09oneContext = createContext()

export const Task09oneProvider = ({ children }) => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState('')

	const [errorAge, setErrorAge] = useState()

	const [person, setPerson] = useState([])

	const [data, setData] = useState([
		{
			id: uuidv4(),
			firstName: '',
			lastName: '',
			age: '',
		},
	])

	const handleChangeFirstName = e => {
		setFirstName(e.target.value)
	}

	const handleChangeLastName = e => {
		setLastName(e.target.value)
	}

	const handleChangeAge = e => {
		setAge(e.target.value)
	}

	useEffect(() => {
		setData([
			{
				id: uuidv4(),
				firstName: firstName,
				lastName: lastName,
				age: age,
			},
		])
	}, [firstName, lastName, age])

	const handlePersonResult = () => {
		if (firstName !== '' && lastName !== '' && age !== '' && person.length <= 6) {
			setPerson(prevPerson => [...prevPerson, data])
		}
	}

	return (
		<Task09oneContext.Provider
			value={{
				firstName,
				lastName,
				age,
				person,
				handleChangeFirstName,
				handleChangeLastName,
				handleChangeAge,
				handlePersonResult,
			}}
		>
			{children}
		</Task09oneContext.Provider>
	)
}

export default Task09oneContext
