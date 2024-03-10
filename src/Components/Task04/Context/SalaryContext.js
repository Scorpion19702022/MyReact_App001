import { createContext, useEffect, useState } from 'react'

const SalaryContext = createContext()

export const CalculateSalaryCotext = ({ children }) => {
	const [inputValue, setInputValue] = useState('')
	const [salary, setSalary] = useState('')
	const [error, setError] = useState('')
	const [income, setIncome] = useState('')
	const [finishSalary, setFinishSalary] = useState(0)
	const [allContributions, setAllContributions] = useState('')

	const [contributions, setContributions] = useState({
		contrZUS: '',
		contrPension: '',
		contrDisability: '',
		contrSikness: '',
		contrHealthy: '',
		contrTax: '',
	})

	let minSalary = 4242
	let contributionsZUS = 0.1371
	let contributionPension = 0.0976
	let contributionDisability = 0.015
	let contributionSikness = 0.0245

	let contributionsHealthy = 0.09
	let costMonth = 250

	let tax = 0.12

	const handleChangeValueInput = e => {
		setInputValue(e.target.value)
	}

	useEffect(() => {
		if (contributions.contrZUS > 0 || income > 0) {
			setSalary((inputValue - contributions.contrZUS).toFixed(2))
			setIncome((inputValue - contributions.contrZUS - costMonth).toFixed(2))
			setContributions({
				...contributions,
				contrTax: (income * tax - 300).toFixed(0),
			})
		}
	}, [contributions.contrZUS, income])

	useEffect(() => {
		if (contributions.contrTax > 0) {
			setFinishSalary(
				(inputValue - contributions.contrZUS - contributions.contrHealthy - contributions.contrTax).toFixed(2)
			)
		}
	}, [contributions.contrTax])

	useEffect(() => {
		if (contributions.contrZUS > 0 && contributions.contrHealthy > 0 && contributions.contrTax > 0) {
			setAllContributions(contributions.contrZUS + contributions.contrHealthy + contributions.contrTax)
		}
	}, [contributions])

	const handleClickChangeSalary = () => {
		if (inputValue === '') {
			setError('musisz wpisać wartość')
		} else if (inputValue < minSalary) {
			setError('Twoje zarobki są niższe niż minimalna krajowa i nie można dokonać obliczenia')
		}

		if (inputValue >= minSalary) {
			setContributions({
				contrZUS: (inputValue * contributionsZUS).toFixed(2),
				contrPension: (inputValue * contributionPension).toFixed(2),
				contrDisability: (inputValue * contributionDisability).toFixed(2),
				contrSikness: (inputValue * contributionSikness).toFixed(2),
				contrHealthy: (inputValue - contributions.contrZUS) * contributionsHealthy,
			})
		}
	}

	console.log(finishSalary)

	const handleClickClear = () => {
		setInputValue('')
		setError('')
		setSalary('')
		setContributions({
			contrZUS: '',
		})
		setFinishSalary(0)
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
				finishSalary,
				allContributions,
			}}
		>
			{children}
		</SalaryContext.Provider>
	)
}

export default SalaryContext
