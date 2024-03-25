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
				density: '144,54 os./km²',
				area: '19 946,74 km²',
				capital: 'Wrocław',
				peopleCapital: '',
				info: 'Zostało utworzone w 1999 roku z ziem poprzednich województw wrocławskiego, legnickiego, jeleniogórskiego, wałbrzyskiego i części leszczyńskiego oraz kaliskiego.',
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
				info: 'Zostało utworzone w 1999 roku z ziem poprzednich województw wrocławskiego, legnickiego, jeleniogórskiego, wałbrzyskiego i części leszczyńskiego oraz kaliskiego.',
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
				info: 'Zostało utworzone na mocy ustawy z dnia 24 lipca 1998 w przybliżeniu z dawnych województw: bydgoskiego, toruńskiego i włocławskiego.',
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
				info: 'Zostało utworzone na mocy ustawy z dnia 24 lipca 1998 w przybliżeniu z dawnych województw: bydgoskiego, toruńskiego i włocławskiego.',
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
				info: 'Obejmuje głównie południową połowę Niziny Południowopodlaskiej, Polesie Zachodnie i Wołyńskie (po Bug) oraz Wyżynę Lubelską, mały obszar Wyżyny Wołyńskiej, większość polskiego Roztocza i skraj Kotliny Sandomierskiej.',
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
				info: 'Obejmuje głównie południową połowę Niziny Południowopodlaskiej, Polesie Zachodnie i Wołyńskie (po Bug) oraz Wyżynę Lubelską, mały obszar Wyżyny Wołyńskiej, większość polskiego Roztocza i skraj Kotliny Sandomierskiej.',
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
				info: 'Obejmuje większość terytoriów dawnych województw: gorzowskiego i zielonogórskiego oraz niewielkiej części leszczyńskiego.',
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
				info: 'Obejmuje większość terytoriów dawnych województw: gorzowskiego i zielonogórskiego oraz niewielkiej części leszczyńskiego.',
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
				info: 'Obejmuje dawne obszary miejskiego łódzkiego, sieradzkiego, znacznej części piotrkowskiego, skierniewickiego, płockiego, kaliskiego, część częstochowskiego, konińskiego i radomskiego.',
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
				info: 'Obejmuje dawne obszary miejskiego łódzkiego, sieradzkiego, znacznej części piotrkowskiego, skierniewickiego, płockiego, kaliskiego, część częstochowskiego, konińskiego i radomskiego.',
			})
		} else if (country === 'małopolskie' && !capital) {
			setInfoCountry({
				country: 'małopolskie',
				people: '3 430 370',
				density: '',
				area: '',
				capital: 'Kraków',
				peopleCapital: '',
				info: 'Obejmuje dawne obszary krakowskiego , nowosądeckiego, w znacznej części tarnowskiego, bielskiego, część katowickiego, kieleckiego, krośnieńskiego.',
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
				info: 'Obejmuje dawne obszary krakowskiego , nowosądeckiego, w znacznej części tarnowskiego, bielskiego, część katowickiego, kieleckiego, krośnieńskiego.',
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
