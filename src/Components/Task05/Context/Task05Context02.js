import { createContext } from 'react'

const Task05Context02 = createContext()

export const ActionTaskContext02 = ({ children }) => {
	return <Task05Context02.Provider>{children}</Task05Context02.Provider>
}

export default Task05Context02
