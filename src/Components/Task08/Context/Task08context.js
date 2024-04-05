import { createContext } from 'react'

const Task08context = createContext()

export const ToDoListCotext = ({ children }) => {
	const test = 'TEST'

	return <Task08context.Provider value={{ test }}>{children}</Task08context.Provider>
}

export default Task08context
