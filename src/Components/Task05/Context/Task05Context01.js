import { createContext, useState } from 'react'

const Task05Context01 = createContext()

export const ActionTaskContext01 = ({ children }) => {
	const [person, setPerson] = useState('')

	const [city, setCity] = useState('')

	const [youWere, setYouWere] = useState('change')

	const [visit, setVisit] = useState('')

	const [errorFill, setErrorFill] = useState('')

	const handleChangePerson = e => {
		setPerson(e.target.value)
	}

	const handleChangeCity = e => {
		setCity(e.target.value)
	}

	const handleChangeWere = e => {
		setYouWere(e.target.value)
	}

	const handleClickCheck = (e, typeVisit) => {
		if (typeVisit === 'Yes') {
			setPerson(e.target.value)
			setCity(e.target.value)
			setVisit('byłem')

			console.log(person)
			console.log(city)
			console.log(visit)
		} else if (typeVisit === 'No') {
			setPerson(e.target.value)
			setCity(e.target.value)
			setVisit('nie byłem')

			console.log(person)
			console.log(city)
			console.log(visit)
		} else if (typeVisit === 'change' || person === '' || city === '') {
			setErrorFill('wypełnij poprawnie wszystkie pola')
		}
	}

	const handleClickClean = () => {
		setPerson('')
		setCity('')
		setYouWere('change')
	}

	return (
		<Task05Context01.Provider
			value={{
				person,
				handleChangePerson,
				youWere,
				handleChangeWere,
				city,
				handleChangeCity,
				handleClickClean,
				visit,
				errorFill,
				handleClickCheck,
			}}
		>
			{children}
		</Task05Context01.Provider>
	)
}

export default Task05Context01
