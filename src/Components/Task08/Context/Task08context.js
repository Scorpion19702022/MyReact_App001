import { createContext, useState } from 'react'

const Task08context = createContext()

export const ToDoListCotext = ({ children }) => {
	let currentDate = new Date().toISOString().slice(0, 10)

	const [date, setDate] = useState(currentDate)

	return <Task08context.Provider value={{ date }}>{children}</Task08context.Provider>
}

export default Task08context
