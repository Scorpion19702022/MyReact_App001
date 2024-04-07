import React, { useContext } from 'react'

import styles from './Task08do.module.css'
import Task08context from './Context/Task08context'

const Task08do = () => {
	const { taskDo } = useContext(Task08context)

	const taskDoList = taskDo.map(item => (
		<div className={styles.task_do_lists} key={item.id}>
			<h4 className={item.important ? styles.heading_important : styles.heading_no_important}>{item.task}</h4>
			<em className={styles.task_do_date}>{item.taskDate}</em>
			{item.button ? <button className={styles.btn_do}>zrobione</button> : null}
			{item.button ? <button className={styles.btn_do}>usuń</button> : null}
		</div>
	))

	return (
		<div className={styles.wrapper_task_do}>
			<h1 className={styles.heading_task_do}>Do wykonania:</h1>
			{taskDoList}
		</div>
	)
}

export default Task08do
