import { createContext, useState } from 'react'

const Task05Context01 = createContext()

export const ActionTaskContext01 = ({ children }) => {
	const [person, setPerson] = useState('')

	const [city, setCity] = useState('')

	const [youWere, setYouWere] = useState('change')

	const [errorFill, setErrorFill] = useState('')

	const [infoVisit, setInfoVisit] = useState({
		text01: '',
		name: '',
		text02: '',
		visit: '',
		city: '',
	})

	const handleChangePerson = e => {
		setPerson(e.target.value)
	}

	const handleChangeCity = e => {
		setCity(e.target.value)
	}

	const handleChangeWere = e => {
		setYouWere(e.target.value)
	}

	const handleClickCheck = typeVisit => {
		if (typeVisit === 'Yes') {
			setInfoVisit({
				text01: 'Mam na imię',
				name: person,
				text02: 'i',
				visit: 'byłem w mieście',
				city: city,
			})
		} else if (typeVisit === 'No') {
			setInfoVisit({
				text01: 'Mam na imię',
				name: person,
				text02: 'i',
				visit: 'nie byłem w mieście',
				city: city,
			})
		}
		if (typeVisit === 'change' || person === '' || city === '') {
			setErrorFill('wypełnij poprawnie wszystkie pola')
		}
	}

	const handleClickClean = () => {
		setPerson('')
		setCity('')
		setYouWere('change')
		setErrorFill('')
		setInfoVisit({
			text01: '',
			name: '',
			text02: '',
			visit: '',
			city: '',
		})
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
				errorFill,
				handleClickCheck,
				infoVisit,
			}}
		>
			{children}
		</Task05Context01.Provider>
	)
}

export default Task05Context01
