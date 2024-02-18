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

	const [results, setResults] = useState({
		count: 0,
		results: 0,
	})

	const handleCalculate = (type, number) => {
		if (type === 'sub' && results.count > -10) {
			setResults({
				...results,
				count: results.count - +number,
			})
		} else if (type === 'add' && results.count < 10) {
			setResults({
				...results,
				count: results.count + +number,
			})
		}
	}

	// ===========================================================

	return (
		<Task01Context.Provider
			value={{
				textTask01a,
				changeState,
				handleClickAddTextInTask01a,
				handleChange,
				textView,
				results,
				handleCalculate,
			}}
		>
			{children}
		</Task01Context.Provider>
	)
}

export default Task01Context
