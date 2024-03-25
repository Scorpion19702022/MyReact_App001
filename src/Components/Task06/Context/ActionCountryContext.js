import { createContext, useState } from 'react'

const ActionCountryContext = createContext()

export const ChoseContext = ({ children }) => {
	const [country, setCountry] = useState('wybierz województwo')

	const [capital, setCapital] = useState(false)

	const [error, setError] = useState('')

	const [infoCountry, setInfoCountry] = useState({
		country: '',
		people: '',
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
				people: '2 883 133',
				capital: 'Wrocław',
				info: 'Zostało utworzone w 1999 roku z ziem poprzednich województw wrocławskiego, legnickiego, jeleniogórskiego, wałbrzyskiego i części leszczyńskiego oraz kaliskiego.',
			})
			setError('')
		} else if (country === 'dolnośląskie' && !capital) {
			setInfoCountry({
				country: 'dolnośląskie',
				people: '2 883 133',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				info: 'Zostało utworzone w 1999 roku z ziem poprzednich województw wrocławskiego, legnickiego, jeleniogórskiego, wałbrzyskiego i części leszczyńskiego oraz kaliskiego.',
			})
			setError('')
		} else if (country === 'kujawsko-pomorskie' && capital) {
			setInfoCountry({
				country: 'kujawsko-pomorskie',
				people: '2 001 670',
				capital: 'Bydgoszcz',
				info: 'Zostało utworzone na mocy ustawy z dnia 24 lipca 1998 w przybliżeniu z dawnych województw: bydgoskiego, toruńskiego i włocławskiego.',
			})
			setError('')
		} else if (country === 'kujawsko-pomorskie' && !capital) {
			setInfoCountry({
				country: 'kujawsko-pomorskie',
				people: '2 001 670',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				info: 'Zostało utworzone na mocy ustawy z dnia 24 lipca 1998 w przybliżeniu z dawnych województw: bydgoskiego, toruńskiego i włocławskiego.',
			})
			setError('')
		} else if (country === 'lubelskie' && capital) {
			setInfoCountry({
				country: 'lubelskie',
				people: '2 038 299',
				capital: 'Lublin',
				info: 'Obejmuje głównie południową połowę Niziny Południowopodlaskiej, Polesie Zachodnie i Wołyńskie (po Bug) oraz Wyżynę Lubelską, mały obszar Wyżyny Wołyńskiej, większość polskiego Roztocza i skraj Kotliny Sandomierskiej.',
			})
			setError('')
		} else if (country === 'lubelskie' && !capital) {
			setInfoCountry({
				country: 'lubelskie',
				people: '2 038 299',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				info: 'Obejmuje głównie południową połowę Niziny Południowopodlaskiej, Polesie Zachodnie i Wołyńskie (po Bug) oraz Wyżynę Lubelską, mały obszar Wyżyny Wołyńskiej, większość polskiego Roztocza i skraj Kotliny Sandomierskiej.',
			})
			setError('')
		} else if (country === 'lubuskie' && capital) {
			setInfoCountry({
				country: 'lubuskie',
				people: '977 493',
				capital: 'Zielona Góra',
				info: 'Obejmuje większość terytoriów dawnych województw: gorzowskiego i zielonogórskiego oraz niewielkiej części leszczyńskiego.',
			})
			setError('')
		} else if (country === 'lubuskie' && !capital) {
			setInfoCountry({
				country: 'lubuskie',
				people: '977 493',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				info: 'Obejmuje większość terytoriów dawnych województw: gorzowskiego i zielonogórskiego oraz niewielkiej części leszczyńskiego.',
			})
			setError('')
		} else if (country === 'łódzkie' && capital) {
			setInfoCountry({
				country: 'łódzkie',
				people: '2 378 483',
				capital: 'Łódź',
				info: 'Obejmuje dawne obszary miejskiego łódzkiego, sieradzkiego, znacznej części piotrkowskiego, skierniewickiego, płockiego, kaliskiego, część częstochowskiego, konińskiego i radomskiego.',
			})
			setError('')
		} else if (country === 'łódzkie' && !capital) {
			setInfoCountry({
				country: 'łódzkie',
				people: '2 378 483',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				info: 'Obejmuje dawne obszary miejskiego łódzkiego, sieradzkiego, znacznej części piotrkowskiego, skierniewickiego, płockiego, kaliskiego, część częstochowskiego, konińskiego i radomskiego.',
			})
			setError('')
		} else if (country === 'wybierz województwo') {
			setError('wybierz województwo by uzyskać informacje')
		}
	}

	console.log(infoCountry)
	console.log(country)

	const handleClickReset = () => {
		setCountry('wybierz województwo')
		setCapital(false)
		setError('')
		setInfoCountry({
			country: '',
			people: '',
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
