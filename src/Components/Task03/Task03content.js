import React from 'react'

import styles from './Task03.module.css'
import Task03inputs from './Task03inputs'

const Task03content = () => {
	return (
		<div className={styles.wrapper_content}>
			<h3 className={styles.heading_content}>Kalkulator BMI</h3>
			<Task03inputs />
		</div>
	)
}

export default Task03content
