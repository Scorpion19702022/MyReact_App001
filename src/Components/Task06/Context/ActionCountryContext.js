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
				area: '19 946,74 km²',
				people: '2 883 133',
				density: '144,54 os./km² ',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'kujawsko-pomorskie' && capital) {
			setInfoCountry({
				country: 'kujawsko-pomorskie',
				area: '17 971,34 km²',
				people: '2 001 670',
				density: '111 os./km²',
				capital: 'Bydgoszcz',
				peopleCapital: '328 370',
			})
			setError('')
		} else if (country === 'kujawsko-pomorskie' && !capital) {
			setInfoCountry({
				country: 'kujawsko-pomorskie',
				area: '17 971,34 km²',
				people: '2 001 670',
				density: '111 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'lubelskie' && capital) {
			setInfoCountry({
				country: 'lubelskie',
				area: '25 122,46 km²',
				people: '2 038 299',
				density: '81 os./km²',
				capital: 'Lublin',
				peopleCapital: '331 243',
			})
			setError('')
		} else if (country === 'lubelskie' && !capital) {
			setInfoCountry({
				country: 'lubelskie',
				area: '25 122,46 km²',
				people: '2 038 299',
				density: '81 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'lubuskie' && capital) {
			setInfoCountry({
				country: 'lubuskie',
				area: '13 987,93 km²',
				people: '977 493',
				density: '70 os./km²',
				capital: 'Gorzów Wielkopolski',
				peopleCapital: '115 847',
			})
			setError('')
		} else if (country === 'lubuskie' && !capital) {
			setInfoCountry({
				country: 'lubuskie',
				area: '13 987,93 km²',
				people: '977 493',
				density: '70 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'łódzkie' && capital) {
			setInfoCountry({
				country: 'łódzkie',
				area: '18 218,98 km²',
				people: '2 378 483',
				density: '130,1 os./km²',
				capital: 'Łódź',
				peopleCapital: '658 444',
			})
			setError('')
		} else if (country === 'łódzkie' && !capital) {
			setInfoCountry({
				country: 'łódzkie',
				area: '18 218,98 km²',
				people: '2 378 483',
				density: '130,1 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
		} else if (country === 'małopolskie' && capital) {
			setInfoCountry({
				country: 'małopolskie',
				area: '15 182,87 km²',
				people: '3 430 370',
				density: '226 os./km²',
				capital: 'Kraków',
				peopleCapital: '804 282',
			})
			setError('')
		} else if (country === 'małopolskie' && !capital) {
			setInfoCountry({
				country: 'małopolskie',
				area: '15 182,87 km²',
				people: '3 430 370',
				density: '226 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'mazowieckie' && capital) {
			setInfoCountry({
				country: 'mazowieckie',
				area: '35 558,47 km²',
				people: '5 512 794',
				density: '155 os./km²',
				capital: 'Warszawa',
				peopleCapital: '1 861 975',
			})
			setError('')
		} else if (country === 'mazowieckie' && !capital) {
			setInfoCountry({
				country: 'mazowieckie',
				area: '35 558,47 km²',
				people: '5 512 794',
				density: '155 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'opolskie' && capital) {
			setInfoCountry({
				country: 'opolskie',
				area: '9 411,87 km²',
				people: '948 583',
				density: '101 os./km²',
				capital: 'Opole',
				peopleCapital: '126 755',
			})
			setError('')
		} else if (country === 'opolskie' && !capital) {
			setInfoCountry({
				country: 'opolskie',
				area: '9 411,87 km²',
				people: '948 583',
				density: '101 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'podkarpackie' && capital) {
			setInfoCountry({
				country: 'podkarpackie',
				area: '17 845,76 km²',
				people: '2 085 932',
				density: '117 os./km²',
				capital: 'Rzeszów',
				peopleCapital: '197 536',
			})
			setError('')
		} else if (country === 'podkarpackie' && !capital) {
			setInfoCountry({
				country: 'podkarpackie',
				area: '17 845,76 km²',
				people: '2 085 932',
				density: '117 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'podlaskie' && capital) {
			setInfoCountry({
				country: 'podlaskie',
				area: '20 187,02 km²',
				people: '1 148 720',
				density: '57 os./km²',
				capital: 'Białystok',
				peopleCapital: '292 600',
			})
			setError('')
		} else if (country === 'podlaskie' && !capital) {
			setInfoCountry({
				country: 'podlaskie',
				area: '20 187,02 km²',
				people: '1 148 720',
				density: '57 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'pomorskie' && capital) {
			setInfoCountry({
				country: 'pomorskie',
				area: '18 310,34 km²',
				people: '2 358 323',
				density: '129 os./km²',
				capital: 'Gdańsk',
				peopleCapital: '486 492',
			})
			setError('')
		} else if (country === 'pomorskie' && !capital) {
			setInfoCountry({
				country: 'pomorskie',
				area: '18 310,34 km²',
				people: '2 358 323',
				density: '129 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'śląskie' && capital) {
			setInfoCountry({
				country: 'śląskie',
				area: '12 333,09 km²',
				people: '4 375 947',
				density: '354,8 os./km²',
				capital: 'Katowice',
				peopleCapital: '280 190',
			})
			setError('')
		} else if (country === 'śląskie' && !capital) {
			setInfoCountry({
				country: 'śląskie',
				area: '12 333,09 km²',
				people: '4 375 947',
				density: '354,8 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'świętokrzyskie' && capital) {
			setInfoCountry({
				country: 'świętokrzyskie',
				area: '11 710,5 km²',
				people: '1 187 693',
				density: '101 os./km²',
				capital: 'Kielce',
				peopleCapital: '183 885',
			})
			setError('')
		} else if (country === 'świętokrzyskie' && !capital) {
			setInfoCountry({
				country: 'świętokrzyskie',
				area: '11 710,5 km²',
				people: '1 187 693',
				density: '101 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'warmińsko-mazurskie' && capital) {
			setInfoCountry({
				country: 'warmińsko-mazurskie',
				area: '24 173,47 km²',
				people: '1 362 433',
				density: '56 os./km²',
				capital: 'Olsztyn',
				peopleCapital: '168 212',
			})
			setError('')
		} else if (country === 'warmińsko-mazurskie' && !capital) {
			setInfoCountry({
				country: 'warmińsko-mazurskie',
				area: '24 173,47 km²',
				people: '1 362 433',
				density: '56 os./km²',
				capital: 'Nie wybrałeś by sprawdzić stolicę',
				peopleCapital: 'Ponieważ nie masz wybranej stolicy nie uzyskasz danych',
			})
			setError('')
		} else if (country === 'wielkopolskie' && capital) {
			setInfoCountry({
				country: 'wielkopolskie',
				area: '29 826,51 km²',
				people: '3 490 364',
				density: '117 os./km²',
				capital: 'Poznań',
				peopleCapital: '541 316',
			})
			setError('')
		} else if (country === 'wielkopolskie' && !capital) {
			setInfoCountry({
				country: 'wielkopolskie',
				area: '29 826,51 km²',
				people: '3 490 364',
				density: '117 os./km²',
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
