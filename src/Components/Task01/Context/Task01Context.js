import { createContext, useState } from 'react'

const Task01Context = createContext()

export const AddFunctionsTask01Provider = ({ children }) => {
	const [textTask01a, setTextTask01a] = useState('')

	const [textView, setTextView] = useState('')

	const [changeState, setChangeState] = useState(false)

	const handleClickAddTextInTask01a = () => {
		setChangeState(!changeState)
		setTextView(textTask01a)
		setTextTask01a('')
	}

	const handleChange = e => {
		setTextTask01a(e.target.value)
	}

	return (
		<Task01Context.Provider value={{ textTask01a, changeState, handleClickAddTextInTask01a, handleChange, textView }}>
			{children}
		</Task01Context.Provider>
	)
}

export default Task01Context
