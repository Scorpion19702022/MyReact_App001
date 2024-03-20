import { createContext, useState } from 'react'

const Task05Context03 = createContext()

export const ActionTaskContext03 = ({ children }) => {
	let minDate = new Date().toISOString().slice(0, 10)

	const [yourName, setYourName] = useState('')
	const [infoName, setInfoName] = useState('')

	const [yourCity, setYourCity] = useState('wybierz miasto')
	const [infoCity, setInfoCity] = useState('')

	const [person, setPerson] = useState('persons')
	const [infoPerson, setInfoPerson] = useState('')

	const [date, setDate] = useState(minDate)
	const [infoDate, setInfoDate] = useState('')

	const [visits, setVisits] = useState('amound')
	const [infoVisits, setInfoVisits] = useState('')

	const [rating, setRating] = useState('Oceń pobyt')
	const [infoRating, setInfoRating] = useState('')

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

	const handleChangeVisits = e => {
		setVisits(e.target.value)
	}

	const handleChangeRating = e => {
		setRating(e.target.value)
	}

	const handleClickInfoVacation = (yourCity, person, visits, rating) => {
		if (
			yourName !== '' &&
			yourCity !== 'wybierz miasto' &&
			person !== 'persons' &&
			date !== minDate &&
			visits !== 'amound' &&
			rating !== 'Oceń pobyt'
		) {
			setInfoName(yourName)
			setInfoCity(yourCity)
			setInfoPerson(person)
			setInfoDate(date)
			setInfoVisits(visits)
			setInfoRating(rating)
			setError('')
		} else if (
			yourName === '' ||
			yourCity === 'wybierz miasto' ||
			person === 'person' ||
			date === minDate ||
			visits === 'amound' ||
			rating === 'Oceń pobyt'
		) {
			setError('wypełnij poprawnie wszystkie pola')
			setInfoDate('nie mogłeś być bo to dzisiaj')
		}
	}

	const handleCleanInputs = () => {
		setYourName('')
		setInfoName('')
		setYourCity('wybierz miasto')
		setInfoCity('')
		setPerson('persons')
		setInfoPerson('')
		setDate(minDate)
		setInfoDate('')
		setVisits('amound')
		setInfoVisits('')
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
				infoDate,
				visits,
				infoVisits,
				rating,
				infoRating,
				error,
				handleChangeYourName,
				handleChangeCity,
				handleChangePerson,
				handleChangeDate,
				handleChangeVisits,
				handleChangeRating,
				handleClickInfoVacation,
				handleCleanInputs,
			}}
		>
			{children}
		</Task05Context03.Provider>
	)
}

export default Task05Context03
