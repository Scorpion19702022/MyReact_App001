import { createContext, useState } from 'react'

const ActionCountryContext = createContext()

export const ChoseContext = ({ children }) => {
	const [country, setCountry] = useState('wybierz województwo')

	const [capital, setCapital] = useState(false)

	const handleChangeCountry = e => {
		setCountry(e.target.value)
	}

	const handleChangeCapital = () => {
		setCapital(!capital)
	}

	return (
		<ActionCountryContext.Provider value={{ country, capital, handleChangeCountry, handleChangeCapital }}>
			{children}
		</ActionCountryContext.Provider>
	)
}

export default ActionCountryContext
