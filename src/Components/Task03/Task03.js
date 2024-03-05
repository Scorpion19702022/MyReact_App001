import React from 'react'

import styles from './Task03.module.css'
import Task03content from './Task03content'
import { AddFunctionContent } from './Context/CalculateContext'

const Task03 = () => {
	return (
		<div className={styles.wrapper_task03}>
			<div className={styles.task03_header}>
				<h1 className={styles.task03_heading}>Task03</h1>
				<p className={styles.task03_theme}>Kalkulator BMI z wykorzystaniem CONTEXT</p>
			</div>
			<AddFunctionContent>
				<Task03content />
			</AddFunctionContent>
		</div>
	)
}

export default Task03
