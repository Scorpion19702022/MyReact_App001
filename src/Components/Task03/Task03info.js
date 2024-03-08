import React, { useContext } from 'react'

import styles from './Task03info.module.css'
import CalculateContext from './Context/CalculateContext'

const Task03info = () => {
	const { result, info, photo } = useContext(CalculateContext)

	return (
		<div className={styles.info_main_wrapper}>
			<div className={styles.wrapper_info}>
				<h4 className={styles.bmi}>
					Twoje BMI: <span className={styles.number_bmi}>{result}</span>
				</h4>
				<div className={styles.box_info}>
					<p className={result === null ? styles.info_error : styles.info}>{info}</p>
				</div>
			</div>
			<div className={styles.box_img}>
				<img className={styles.bmi_img} src={photo} alt='' />
			</div>
		</div>
	)
}

export default Task03info
