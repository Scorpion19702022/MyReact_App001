import { createContext } from 'react'

const ActionCountryContext = createContext()

export const ChhoseContext = ({ children }) => {
	return <ActionCountryContext.Provider>{children}</ActionCountryContext.Provider>
}

export default ChhoseContext
