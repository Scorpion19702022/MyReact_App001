import React from 'react'

import styles from './Task06.module.css'
import Task06country from './Task06country'

const Task06 = () => {
	return (
		<div className={styles.wrapper_task06}>
			<div className={styles.box_header}>
				<h1 className={styles.header_heading}>Task 06</h1>
				<h4 className={styles.header_theme}>Zabawa z select</h4>
			</div>
			<Task06country />
		</div>
	)
}

export default Task06
