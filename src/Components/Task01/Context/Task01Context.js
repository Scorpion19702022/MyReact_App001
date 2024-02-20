import { createContext, useEffect, useState } from 'react'

const Task01Context = createContext()

export const AddFunctionsTask01Provider = ({ children }) => {
	// =================== FirstTask01 ============================

	const [textTask01a, setTextTask01a] = useState('')

	const [textView, setTextView] = useState('')

	const [changeState, setChangeState] = useState(false)

	const handleClickAddTextInTask01a = () => {
		if (textTask01a.length < 20) {
			setTextView(textTask01a)
			setChangeState(!changeState)
		}
		if (textTask01a !== '' || textView !== '') {
			setTextTask01a('')
		}
	}

	const handleChange = e => {
		if (textTask01a.length < 20) {
			setTextTask01a(e.target.value)
			setChangeState(false)
		}
	}

	// ===========================================================

	// ===================== SecondTask01 ========================

	const [results, setResults] = useState({
		count: 0,
		resultsClick: 0,
	})

	const [success, setSuccess] = useState('')

	const [limitCount, setLimitCount] = useState('')

	useEffect(() => {
		if (results.resultsClick !== 0) {
			setSuccess('zadanie wykonane')
		} else {
			setSuccess('')
		}
	}, [results.resultsClick])

	useEffect(() => {
		if (results.count >= 100) {
			setLimitCount('osiągnąłeś maksymalna wartość')
		} else if (results.count <= -100) {
			setLimitCount('osiągnąłeś minimalną wartość')
		} else {
			setLimitCount('')
		}
	}, [results.count])

	const handleCalculate = (type, number) => {
		if (type === 'sub' && results.count >= -100) {
			setResults({
				...results,
				count: results.count - +number,
				resultsClick: results.resultsClick + 1,
			})
		} else if (type === 'add' && results.count <= 100) {
			setResults({
				...results,
				count: results.count + +number,
				resultsClick: results.resultsClick + 1,
			})
		}
	}

	const handleDeleteResults = () => {
		setResults({
			count: 0,
			resultsClick: 0,
		})
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
				handleDeleteResults,
				success,
				limitCount,
			}}
		>
			{children}
		</Task01Context.Provider>
	)
}

export default Task01Context
