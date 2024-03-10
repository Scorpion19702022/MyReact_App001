import { createContext, useState } from 'react'

const SalaryContext = createContext()

export const CalculateSalaryCotext = ({ children }) => {
	const [inputValue, setInputValue] = useState('')
	const [salary, setSalary] = useState('')
	const [error, setError] = useState('')

	const [contributions, setContributiona] = useState({
		contrZUS: '',
		contrPension: '',
		contrDisability: '',
		contrSikness: '',
	})

	let minSalary = 4242

	const handleChangeValueInput = e => {
		setInputValue(e.target.value)
	}

	const handleClickChangeSalary = () => {
		if (inputValue === '') {
			setError('musisz wpisać wartość')
		} else if (inputValue < minSalary) {
			setError('Twoje zarobki są niższe niż minimalna krajowa i nie można dokonać obliczenia')
		}

		if (inputValue >= minSalary) {
		}
	}

	const handleClickClear = () => {
		setInputValue('')
		setError('')
	}

	return (
		<SalaryContext.Provider
			value={{
				inputValue,
				handleChangeValueInput,
				error,
				handleClickChangeSalary,
				handleClickClear,
				contributions,
				salary,
			}}
		>
			{children}
		</SalaryContext.Provider>
	)
}

export default SalaryContext
