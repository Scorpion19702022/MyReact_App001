import { createContext, useState } from 'react'

const Task01Context = createContext()

export const AddFunctionsTask01Provider = ({ children }) => {
	const [textTask01a, setTextTask01a] = useState('')

	const [textView, setTextView] = useState('')

	const [changeState, setChangeState] = useState(false)

	const handleClickAddTextInTask01a = () => {
		if (textTask01a.length <= 20) {
			setTextView(textTask01a)
		}
		if (textTask01a !== '' || textView !== '') {
			setTextTask01a('')
			setChangeState(!changeState)
		}
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
