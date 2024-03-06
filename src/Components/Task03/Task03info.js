import React, { useContext } from 'react'

import styles from './Task03info.module.css'
import CalculateContext from './Context/CalculateContext'

const Task03info = () => {
	const { info } = useContext(CalculateContext)

	return (
		<div className={styles.wrapper_info}>
			<h4 className={styles.bmi}>
				Twoje BMI: <span className={styles.number_bmi}>{info}</span>
			</h4>
		</div>
	)
}

export default Task03info
