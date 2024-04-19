import { createContext, useState } from 'react'

const Task09oneContext = createContext()

export const Task09oneProvider = ({ children }) => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState()
	const [age, setAge] = useState(null)

	return <Task09oneContext.Provider value={{ firstName, lastName, age }}>{children}</Task09oneContext.Provider>
}

export default Task09oneContext
