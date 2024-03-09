import React from 'react'

import styles from './Task04.module.css'
import Task04input from './Task04input'
import { CalculateSalaryCotext } from './Context/SalaryContext'

const Task04 = () => {
	return (
		<div className={styles.wrapper_task04}>
			<div className={styles.header_task04}>
				<h1 className={styles.header_heading}>Task 04</h1>
				<h4 className={styles.header_theme}>Kalkulator wyagrodzeń</h4>
			</div>
			<CalculateSalaryCotext>
				<Task04input />
			</CalculateSalaryCotext>
		</div>
	)
}

export default Task04
