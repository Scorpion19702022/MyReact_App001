import { createContext } from 'react'

const Task09oneContext = createContext()

export const Task09oneProvider = ({ children }) => {
	return <Task09oneContext.Provider value={{}}>{children}</Task09oneContext.Provider>
}

export default Task09oneContext
