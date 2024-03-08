import { createContext, useEffect, useState } from 'react'

import Bmi1 from '../assets/bmi_1.png'
import Bmi2 from '../assets/bmi_2.png'
import Bmi3 from '../assets/bmi_3.png'
import Bmi4 from '../assets/bmi_4.png'
import Bmi5 from '../assets/bmi_5.png'
import Bmi6 from '../assets/bmi_6.png'
import Bmi7 from '../assets/bmi_7.png'
import Bmi8 from '../assets/bmi_8.png'

const CalculateContext = createContext()

export const AddFunctionContent = ({ children }) => {
	const [dataWeight, setDataWeight] = useState('')

	const [dataTall, setDataTall] = useState('')

	const [result, setResult] = useState(null)

	const [info, setInfo] = useState('')

	const [photo, setPhoto] = useState(Bmi4)

	const handleChangeWeight = e => {
		setDataWeight(e.target.value)
	}

	const handleChangeTall = e => {
		setDataTall(e.target.value)
	}

	useEffect(() => {
		if (result > 0 && result <= 16) {
			setInfo('stan wygłodzenia')
			setPhoto(Bmi1)
		} else if (result > 16 && result <= 16.99) {
			setInfo('wychudzenie')
		} else if (result > 17 && result <= 18.49) {
			setInfo('niedowaga')
		} else if (result > 18.5 && result <= 24.99) {
			setInfo('waga prawidłowa')
		} else if (result > 25 && result <= 29.99) {
			setInfo('nadwaga')
		} else if (result > 30 && result <= 34.99) {
			setInfo('otyłość I stopnia')
		} else if (result > 35 && result <= 39.99) {
			setInfo('otyłość II stopnia')
		} else if (result > 40) {
			setInfo('otyłość III stopnia')
		}
	}, [result])

	const handleResult = () => {
		setResult((dataWeight / Math.pow(dataTall / 100, 2)).toFixed(2))
		if (result === 0 || dataWeight === '' || dataTall === '') {
			setInfo('wypełnij poprawnie wszystkie pola')
			setResult(null)
		}
	}

	const handleClickReset = () => {
		setDataWeight('')
		setDataTall('')
		setResult(null)
		setInfo('')
		setPhoto(Bmi4)
	}

	return (
		<CalculateContext.Provider
			value={{
				dataWeight,
				dataTall,
				result,
				info,
				handleChangeWeight,
				handleChangeTall,
				handleClickReset,
				handleResult,
				photo,
			}}
		>
			{children}
		</CalculateContext.Provider>
	)
}

export default CalculateContext
