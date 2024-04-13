import React, { useContext } from 'react'

import styles from './Task08do.module.css'
import Task08context from './Context/Task08context'

const Task08do = () => {
	const { taskDoList, error, infoTaskDoLength, handleDeleteTask, handleTaskDone } = useContext(Task08context)

	const taskDoLists = taskDoList.map(item => (
		<div className={styles.task_do_lists} key={item.id}>
			<div className={styles.tasks_do_important}>
				<h4 className={item.important ? styles.heading_important : styles.heading_no_important}>{item.task}</h4>
			</div>
			<div className={styles.task_do_dates}>
				<em className={styles.task_do_date}>{item.taskDate}</em>
			</div>
			<div className={styles.task_do_btns}>
				<button className={styles.btn_do} onClick={() => handleTaskDone(item.id)}>
					zrobione
				</button>
				<button className={styles.btn_do} onClick={() => handleDeleteTask(item.id)}>
					usuń
				</button>
			</div>
		</div>
	))

	console.log(taskDoList.map(task => task.task).sort())

	return (
		<div className={styles.wrapper_task_do}>
			<h1 className={styles.heading_task_do}>Do wykonania:</h1>
			{taskDoLists}
			<h2 className={styles.error}>{error}</h2>
			<h2 className={styles.too_tasks}>{infoTaskDoLength}</h2>
		</div>
	)
}

export default Task08do
