import { createContext, useState } from 'react'

const Task05Context01 = createContext()

export const ActionTaskContext01 = ({ children }) => {
	const [person, setPerson] = useState('')

	const handleChangePerson = e => {
		setPerson(e.target.value)
	}

	return <Task05Context01.Provider value={{ person, handleChangePerson }}>{children}</Task05Context01.Provider>
}

export default Task05Context01
