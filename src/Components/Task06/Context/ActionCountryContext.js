import { createContext, useState } from 'react'

const ActionCountryContext = createContext()

export const ChoseContext = ({ children }) => {
	const [country, setCountry] = useState('wybierz województwo')

	const [capital, setCapital] = useState(false)

	const [error, setError] = useState('')

	const [infoCountry, setInfoCountry] = useState({
		country: '',
		capital: '',
		info: '',
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
				capital: 'Wrocław',
				info: 'Zostało utworzone w 1999 roku z ziem poprzednich województw wrocławskiego, legnickiego, jeleniogórskiego, wałbrzyskiego i części leszczyńskiego oraz kaliskiego. Województwo to jest położone na południowym zachodzie Polski, obejmuje zachodnią część historycznego Śląska, czyli większość Dolnego Śląska, a także ziemię kłodzką oraz wschodnie Łużyce Górne. Według danych z 30 czerwca 2023 r. województwo zamieszkiwały 2 883 133 osoby',
			})
		} else if (country === 'dolnośląskie' && !capital) {
			setInfoCountry({
				country: 'dolnośląskie',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				info: 'Zostało utworzone w 1999 roku z ziem poprzednich województw wrocławskiego, legnickiego, jeleniogórskiego, wałbrzyskiego i części leszczyńskiego oraz kaliskiego. Województwo to jest położone na południowym zachodzie Polski, obejmuje zachodnią część historycznego Śląska, czyli większość Dolnego Śląska, a także ziemię kłodzką oraz wschodnie Łużyce Górne. Według danych z 30 czerwca 2023 r. województwo zamieszkiwały 2 883 133 osoby',
			})
		}
	}

	console.log(infoCountry)
	console.log(country)

	const handleClickReset = () => {
		setCountry('wybierz województwo')
		setCapital(false)
		setInfoCountry({
			country: '',
			capital: '',
			info: '',
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
