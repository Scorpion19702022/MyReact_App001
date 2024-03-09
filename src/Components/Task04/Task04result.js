import React, { useContext } from 'react'

import styles from './Task04result.module.css'
import SalaryContext from './Context/SalaryContext'

const Task04result = () => {
	const { error } = useContext(SalaryContext)

	return (
		<div className={styles.wrapper_result}>
			<div className={styles.box_result_salary}>
				<h3 className={styles.heading_salary}>Twoje wynagrodzenie netto:</h3>
				<h1 className={styles.result_salary}>000 zł</h1>
				<p className={styles.salary_errors}>{error}</p>
			</div>
			<div className={styles.box_all_info}>
				<h3 className={styles.heading_info}>Składki:</h3>
			</div>
		</div>
	)
}

export default Task04result
