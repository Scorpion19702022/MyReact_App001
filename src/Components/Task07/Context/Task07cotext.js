import { createContext } from 'react'

const Task07context = createContext()

export const ActionCaffee = ({ children }) => {
	return <Task07context.Provider value={{}}>{children}</Task07context.Provider>
}

export default Task07context
