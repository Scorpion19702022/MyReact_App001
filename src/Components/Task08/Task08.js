import React from 'react'

import styles from './Task08.module.css'
import { ToDoListCotext } from './Context/Task08context'
import Task08inputs from './Task08inputs'

const Task08 = () => {
	const users = [
		{
			name: 'Zenek',
			car: {
				name: 'Toyota',
				age: 10,
			},
		},
		{
			name: 'Marcin',
			car: {
				name: 'Fiat',
				age: 15,
			},
		},
		{
			name: 'Monika',
			car: {
				name: 'BMW',
				age: 5,
			},
		},
	]

	// sortuje po wieku samochodu
	users.sort((a, b) => {
		return a.name - b.name
	})

	console.log(users)

	return (
		<div className={styles.wrapper_task08}>
			<div className={styles.header}>
				<h1 className={styles.header_heading}>Task 08</h1>
				<h4 className={styles.header_theme}>ToDo List</h4>
			</div>
			<ToDoListCotext>
				<Task08inputs />
			</ToDoListCotext>
		</div>
	)
}

export default Task08
