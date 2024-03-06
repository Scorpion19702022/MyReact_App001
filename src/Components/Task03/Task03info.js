import React, { useContext } from 'react'

import styles from './Task03info.module.css'
import CalculateContext from './Context/CalculateContext'

const Task03info = () => {
	const { result, info } = useContext(CalculateContext)

	return (
		<div className={styles.wrapper_info}>
			<h4 className={styles.bmi}>
				Twoje BMI: <span className={styles.number_bmi}>{result}</span>
			</h4>
			<div className={styles.box_info}>
				<p className={styles.info}>{info}</p>
			</div>
		</div>
	)
}

export default Task03info
