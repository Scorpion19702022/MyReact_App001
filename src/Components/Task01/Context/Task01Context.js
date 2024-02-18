import { createContext, useState } from 'react'

const Task01Context = createContext()

export const AddFunctionsTask01Provider = ({ children }) => {
	// =================== FirstTask01 ============================

	const [textTask01a, setTextTask01a] = useState('')

	const [textView, setTextView] = useState('')

	const [changeState, setChangeState] = useState(false)

	const handleClickAddTextInTask01a = () => {
		if (textTask01a.length <= 20) {
			setTextView(textTask01a)
			setChangeState(!changeState)
		}
		if (textTask01a !== '' || textView !== '') {
			setTextTask01a('')
		}
	}

	const handleChange = e => {
		if (textTask01a.length <= 20) {
			setTextTask01a(e.target.value)
			setChangeState(false)
		}
	}

	// ===========================================================

	// ===================== SecondTask01 ========================

	const [results, setResults] = useState(0)

	const [amountClick, setAmountClick] = useState([])

	// ===========================================================

	return (
		<Task01Context.Provider
			value={{ textTask01a, changeState, handleClickAddTextInTask01a, handleChange, textView, results, amountClick }}
		>
			{children}
		</Task01Context.Provider>
	)
}

export default Task01Context
