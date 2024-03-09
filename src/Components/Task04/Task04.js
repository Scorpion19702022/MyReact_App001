import React from 'react'

import styles from './Task04.module.css'
import Task04input from './Task04input'

const Task04 = () => {
	return (
		<div className={styles.wrapper_task04}>
			<div className={styles.header_task04}>
				<h1 className={styles.header_heading}>Task 04</h1>
				<h4 className={styles.header_theme}>Kalkulator wyagrodzeń</h4>
			</div>
			<Task04input />
		</div>
	)
}

export default Task04
