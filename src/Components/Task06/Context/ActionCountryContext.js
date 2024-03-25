import { createContext, useState } from 'react'

const ActionCountryContext = createContext()

export const ChoseContext = ({ children }) => {
	const [country, setCountry] = useState('wybierz województwo')

	const [capital, setCapital] = useState(false)

	const [error, setError] = useState('')

	const [infoCountry, setInfoCountry] = useState({
		country: '',
		people: '',
		density: '',
		area: '',
		capital: '',
		peopleCapital: '',
	})

	const handleChangeCountry = e => {
		setCountry(e.target.value)
	}

	const handleChangeCapital = () => {
		setCapital(!capital)
	}

	const handleClickInfo = () => {
		if (country === 'dolnośląskie' && capital) {
			setInfoCountry({
				country: 'dolnośląskie',
				people: '2 883 133',
				density: '144,54 os./km²',
				area: '19 946,74 km²',
				capital: 'Wrocław',
				peopleCapital: '674 132',
			})
			setError('')
		} else if (country === 'dolnośląskie' && !capital) {
			setInfoCountry({
				country: 'dolnośląskie',
				people: '2 883 133',
				density: '144,54 os./km² ',
				area: '19 946,74 km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'kujawsko-pomorskie' && capital) {
			setInfoCountry({
				country: 'kujawsko-pomorskie',
				people: '2 001 670',
				density: '',
				area: '',
				capital: 'Bydgoszcz',
				peopleCapital: '',
			})
			setError('')
		} else if (country === 'kujawsko-pomorskie' && !capital) {
			setInfoCountry({
				country: 'kujawsko-pomorskie',
				people: '2 001 670',
				density: '',
				area: '',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'lubelskie' && capital) {
			setInfoCountry({
				country: 'lubelskie',
				people: '2 038 299',
				density: '',
				area: '',
				capital: 'Lublin',
				peopleCapital: '',
			})
			setError('')
		} else if (country === 'lubelskie' && !capital) {
			setInfoCountry({
				country: 'lubelskie',
				people: '2 038 299',
				density: '',
				area: '',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'lubuskie' && capital) {
			setInfoCountry({
				country: 'lubuskie',
				people: '977 493',
				density: '',
				area: '',
				capital: 'Zielona Góra',
				peopleCapital: '',
			})
			setError('')
		} else if (country === 'lubuskie' && !capital) {
			setInfoCountry({
				country: 'lubuskie',
				people: '977 493',
				density: '',
				area: '',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'łódzkie' && capital) {
			setInfoCountry({
				country: 'łódzkie',
				people: '2 378 483',
				density: '',
				area: '',
				capital: 'Łódź',
				peopleCapital: '',
			})
			setError('')
		} else if (country === 'łódzkie' && !capital) {
			setInfoCountry({
				country: 'łódzkie',
				people: '2 378 483',
				density: '',
				area: '',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
		} else if (country === 'małopolskie' && !capital) {
			setInfoCountry({
				country: 'małopolskie',
				people: '3 430 370',
				density: '',
				area: '',
				capital: 'Kraków',
				peopleCapital: '',
			})
			setError('')
		} else if (country === 'małopolskie' && capital) {
			setInfoCountry({
				country: 'małopolskie',
				people: '3 430 370',
				density: '',
				area: '',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		}
	}

	// else if (country === 'wybierz województwo') {
	// 	setError('wybierz województwo by uzyskać informacje')
	// }

	console.log(infoCountry)
	console.log(country)

	const handleClickReset = () => {
		setCountry('wybierz województwo')
		setCapital(false)
		setError('')
		setInfoCountry({
			country: '',
			people: '',
			density: '',
			area: '',
			capital: '',
			peopleCapital: '',
		})
	}

	return (
		<ActionCountryContext.Provider
			value={{
				country,
				capital,
				error,
				infoCountry,
				handleChangeCountry,
				handleChangeCapital,
				handleClickInfo,
				handleClickReset,
			}}
		>
			{children}
		</ActionCountryContext.Provider>
	)
}

export default ActionCountryContext
