import React from 'react'

import styles from './Task03.module.css'
import { AddFunctionContent } from './Context/CalculateContext'

const Task03content = () => {
	return (
		<div className={styles.wrapper_content}>
			<h3 className={styles.heading_content}>Kalkulator BMI</h3>
			<AddFunctionContent></AddFunctionContent>
		</div>
	)
}

export default Task03content
