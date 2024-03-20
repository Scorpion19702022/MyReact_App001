import { createContext, useState } from 'react'

const Task05Context03 = createContext()

export const ActionTaskContext03 = ({ children }) => {
	const [yourName, setYourName] = useState('')
	const [infoName, setInfoName] = useState('')
	const [yourCity, setYourCity] = useState('wybierz miasto')
	const [infoCity, setInfoCity] = useState('')
	const [person, setPerson] = useState('persons')
	const [infoPerson, setInfoPerson] = useState('')
	const [date, setDate] = useState('')

	const [error, setError] = useState('')

	const handleChangeYourName = e => {
		setYourName(e.target.value)
	}

	const handleChangeCity = e => {
		// const selectedIndex = e.target.selectedIndex
		// const cityName = e.target.options[selectedIndex].textContent
		// setYourCity(cityName)
		setYourCity(e.target.value)
	}

	const handleChangePerson = e => {
		setPerson(e.target.value)
		// const selectedIndex = e.target.selectedIndex
		// const personName = e.target.options[selectedIndex].textContent
		// setPerson(personName)
	}

	const handleChangeDate = e => {
		setDate(e.target.value)
	}

	const handleClickInfoVacation = (yourCity, withPerson) => {
		if (yourName !== '' && yourCity !== 'wybierz miasto' && withPerson !== 'persons') {
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
		setYourCity('wybierz miasto')
		setInfoCity('')
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
				date,
				error,
				handleChangeYourName,
				handleChangeCity,
				handleChangePerson,
				handleChangeDate,
				handleClickInfoVacation,
				handleCleanInputs,
			}}
		>
			{children}
		</Task05Context03.Provider>
	)
}

export default Task05Context03
