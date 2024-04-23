import React, { createContext, useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

const Task09twoContext = createContext()

export const Task09twoProvider = ({ children }) => {
	const [car, setCar] = useState('')
	const [carYear, setCarYear] = useState('')

	const year = new Date().getFullYear()

	const [carInfo, setCarInfo] = useState([])

	const [info, setInfo] = useState('')

	const [carTable, setCarTable] = useState([
		{
			id: uuidv4(),
			carName: '',
			carAge: '',
		},
	])

	const handleChangeCar = e => {
		setCar(e.target.value)
	}

	const handleChangeCarYear = e => {
		setCarYear(e.target.value)
	}

	useEffect(() => {
		setCarTable([
			{
				id: uuidv4(),
				carName: car.toUpperCase(),
				carAge: year - carYear,
			},
		])
	}, [car, carYear, year])

	const handleCarInfo = () => {
		if (car !== '' && carYear !== '' && carYear >= year - 10 && carYear <= year && carInfo.length <= 6) {
			setCarInfo(prevState => [...prevState, ...carTable])
			setInfo('dodano poprawnie')
			setCar('')
			setCarYear('')
		} else if (carYear > year) {
			setInfo(`dodanie do listy niemożliwe. nie ma jeszcze ${carYear} roku`)
		} else if (carYear < year - 10) {
			setInfo(`dodanie do listy niemożliwe. samochód jest za stary. ma już ${year - carYear} lat`)
		} else if (carInfo.length > 6) {
			setInfo(`dodanie do listy niemożliwe. osiągnięto ${carInfo.length} aut. usuń pozycję by dodać`)
		}
	}

	const handleDeleteCar = id => {
		const deleteCar = carInfo.filter(item => item.id !== id)
		setCarInfo(deleteCar)
		if (deleteCar && deleteCar.length > 0) {
			setInfo(`usunięto prawidłowo`)
		} else {
			setInfo(`usunięto wszystkie samochody z listy`)
		}
	}

	const handleSortFromYoung = () => {
		carInfo.sort((a, b) => {
			return a.carAge - b.carAge
		})

		setCarInfo(prevState => [...prevState])
		setInfo('posortowano od najmłodszego')
	}

	const handleSortFromOld = () => {
		carInfo.sort((a, b) => {
			return b.carAge - a.carAge
		})

		setCarInfo(prevState => [...prevState])
		setInfo('posortowano od najstarszego')
	}

	return (
		<Task09twoContext.Provider
			value={{
				car,
				carYear,
				year,
				carInfo,
				info,
				handleChangeCar,
				handleChangeCarYear,
				handleCarInfo,
				handleDeleteCar,
				handleSortFromYoung,
				handleSortFromOld,
			}}
		>
			{children}
		</Task09twoContext.Provider>
	)
}

export default Task09twoContext
