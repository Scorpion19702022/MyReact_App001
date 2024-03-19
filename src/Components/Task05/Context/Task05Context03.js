import { createContext, useState } from 'react'

const Task05Context03 = createContext()

export const ActionTaskContext03 = ({ children }) => {
	const [yourName, setYourName] = useState('')
	const [infoName, setInfoName] = useState('')
	const [yourCity, setYourCity] = useState('cities')
	const [infoCity, setInfoCity] = useState('')
	const [person, setPerson] = useState('persons')
	const [infoPerson, setInfoPerson] = useState('')

	const [error, setError] = useState('')

	const handleChangeYourName = e => {
		setYourName(e.target.value)
	}

	const handleChangeCity = e => {
		const selectedIndex = e.target.selectedIndex
		const cityName = e.target.options[selectedIndex].textContent
		setYourCity(cityName)
	}

	const handleChangePerson = e => {
		const selectedIndex = e.target.selectedIndex
		const personName = e.target.options[selectedIndex].textContent
		setPerson(personName)
	}

	const handleClickInfoVacation = (yourCity, withPerson) => {
		if (yourName !== '' && yourCity !== 'cities' && withPerson !== 'persons') {
			setInfoName(yourName)
			setInfoCity(yourCity)
			setInfoPerson(person)
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
			value={{
				yourName,
				infoName,
				yourCity,
				infoCity,
				person,
				infoPerson,
				error,
				handleChangeYourName,
				handleChangeCity,
				handleChangePerson,
				handleClickInfoVacation,
				handleCleanInputs,
			}}
		>
			{children}
		</Task05Context03.Provider>
	)
}

export default Task05Context03
