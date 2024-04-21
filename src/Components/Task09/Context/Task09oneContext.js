import { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Task09oneContext = createContext()

export const Task09oneProvider = ({ children }) => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState('')

	const [error, setError] = useState('')

	const [person, setPerson] = useState([])

	const year = new Date().getFullYear()

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
				age: year - age,
			},
		])
	}, [firstName, lastName, age])

	const handlePersonResult = () => {
		if (
			firstName !== '' &&
			lastName !== '' &&
			age !== '' &&
			person.length < 5 &&
			age >= year - 100 &&
			age <= year - 18
		) {
			setPerson(prevPerson => [...prevPerson, ...data])
			setError('dodano prawidłowo')
			setFirstName('')
			setLastName('')
			setAge('')
		} else if (firstName === '' || lastName === '' || age === '') {
			setError('wypełnij poprawnie wszystkie pola')
		} else if (age < year - 100) {
			setError(`Niemożliwe!!! Naprawdę masz ${year - age} lat?`)
		} else if (age >= year - 18) {
			setError('Nie masz jeszcze 18 lat. Nie możesz się zapisać na listę')
		} else if (person.length >= 5) {
			setError('Osiągnięto maksymalną ilość członków')
		} else if (person.length === 0) {
			setError('informacja o stanie listy')
		}
	}

	const handleCleanResultList = id => {
		const cleanList = person.filter(item => item.id !== id)
		setPerson(cleanList)
		if (cleanList && cleanList.length > 0) {
			setError('usunięto członka z listy')
		} else {
			setError('usunięto wszystkich członków')
		}
	}

	person.sort((a, b) => {
		const nameA = a.lastName
		const nameB = b.lastName
		if (nameA < nameB) {
			return -1
		}
		if (nameA > nameB) {
			return 1
		}
		return 0
	})

	return (
		<Task09oneContext.Provider
			value={{
				firstName,
				lastName,
				age,
				person,
				error,
				handleChangeFirstName,
				handleChangeLastName,
				handleChangeAge,
				handlePersonResult,
				handleCleanResultList,
			}}
		>
			{children}
		</Task09oneContext.Provider>
	)
}

export default Task09oneContext
