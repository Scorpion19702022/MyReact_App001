import React from 'react'

import styles from './Task08.module.css'
import { ToDoListCotext } from './Context/Task08context'
import Task08inputs from './Task08inputs'

const Task08 = () => {
	return (
		<div className={styles.wrapper_task08}>
			<div className={styles.header}>
				<h1 className={styles.header_heading}>Task 08</h1>
				<h4 className={styles.header_theme}>ToDo list</h4>
			</div>
			<ToDoListCotext>
				<Task08inputs />
			</ToDoListCotext>
		</div>
	)
}

export default Task08
