import React from 'react'

import styles from './Task09.module.css'
import Task09one from './Task09one'
import Task09two from './Task09two'
import { Task09oneProvider } from './Context/Task09oneContext'

const Task09 = () => {
	return (
		<div className={styles.wrapper_task09}>
			<div className={styles.box_header}>
				<h1 className={styles.header_heading}>Task 09</h1>
				<h3 className={styles.header_theme}>Zadania z inputami i tablicami i funkcją sort()</h3>
			</div>
			<div className={styles.wrapper}>
				<Task09oneProvider>
					<Task09one />
					<Task09two />
				</Task09oneProvider>
			</div>
		</div>
	)
}

export default Task09