import { createContext } from 'react'

const Task05Context01 = createContext()

export const ActionTaskContext01 = ({ children }) => {
	return <Task05Context01.Provider>{children}</Task05Context01.Provider>
}

export default Task05Context01
