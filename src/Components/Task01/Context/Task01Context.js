import { createContext, useState } from 'react'

const Task01Context = createContext()

export const AddFunctionsTask01Provider = ({ children }) => {
	// const [textTask01a, setTextTask01a] = useState('')

	// const [changeState, setChangeState] = useState(false)

	const handleClickAddTextInTask01a = () => {
		console.log('klik')
	}

	return <Task01Context.Provider value={{ handleClickAddTextInTask01a }}>{children}</Task01Context.Provider>
}

export default Task01Context
