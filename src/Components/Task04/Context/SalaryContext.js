import { createContext, useEffect, useState } from 'react'

const SalaryContext = createContext()

export const CalculateSalaryCotext = ({ children }) => {
	const [inputValue, setInputValue] = useState('')
	const [salary, setSalary] = useState('')
	const [error, setError] = useState('')

	const [contributions, setContributions] = useState({
		contrZUS: '',
		contrPension: '',
		contrDisability: '',
		contrSikness: '',
	})

	let minSalary = 4242
	let contributionsZUS = 0.1371
	let contributionsHealthy = 0.09

	const handleChangeValueInput = e => {
		setInputValue(e.target.value)
	}

	useEffect(() => {
		if (contributions.contrZUS > 0) {
			setSalary((inputValue - contributions.contrZUS).toFixed(2))
		}
	}, [contributions.contrZUS])

	const handleClickChangeSalary = () => {
		if (inputValue === '') {
			setError('musisz wpisać wartość')
		} else if (inputValue < minSalary) {
			setError('Twoje zarobki są niższe niż minimalna krajowa i nie można dokonać obliczenia')
		}

		if (inputValue >= minSalary) {
			setContributions({
				contrZUS: (inputValue * contributionsZUS).toFixed(2),
			})
		}
	}

	const handleClickClear = () => {
		setInputValue('')
		setError('')
		setSalary('')
		setContributions({
			contrZUS: '',
		})
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
