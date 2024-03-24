import { createContext, useState } from 'react'

const ActionCountryContext = createContext()

export const ChhoseContext = ({ children }) => {
	const [country, setCountry] = useState('wybierz województwo')

	const [capital, setCapital] = useState(false)

	const handleChangeCountry = e => {
		setCountry(e.target.value)
	}

	return (
		<ActionCountryContext.Provider value={{ country, capital, handleChangeCountry }}>
			{children}
		</ActionCountryContext.Provider>
	)
}

export default ChhoseContext
