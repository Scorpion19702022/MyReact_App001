import { createContext, useState } from 'react'

const ActionCountryContext = createContext()

export const ChoseContext = ({ children }) => {
	const [country, setCountry] = useState('countries')

	const [capital, setCapital] = useState(false)

	const handleChangeCountry = e => {
		const selectedCountry = e.target.value
		setCountry(selectedCountry)
	}

	return (
		<ActionCountryContext.Provider value={{ country, capital, handleChangeCountry }}>
			{children}
		</ActionCountryContext.Provider>
	)
}

export default ActionCountryContext
