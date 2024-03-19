import { createContext } from 'react'

const Task05Context03 = createContext()

export const ActionTaskContext03 = ({ children }) => {
	return <Task05Context03.Provider>{children}</Task05Context03.Provider>
}

export default Task05Context03
