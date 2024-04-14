import React, { useContext } from 'react'

import styles from './Task08done.module.css'
import Task08context from './Context/Task08context'

const Task08done = () => {
	const { taskDoneList, handleDeleteTaskDone } = useContext(Task08context)

	const taskDone = taskDoneList
		.map(item => (
			<div className={styles.task_done_lists} key={item.id}>
				<div className={styles.tasks_done_important}>
					<h4 className={item.important ? styles.heading_important : styles.heading_no_important}>{item.task}</h4>
				</div>
				<div className={styles.task_done_dates}>
					<em className={styles.task_done_date}>{item.taskDate}</em>
				</div>
				<div className={styles.task_done_btns}>
					<button className={styles.btn_done} onClick={() => handleDeleteTaskDone(item.id)}>
						usuń
					</button>
				</div>
			</div>
		))
		.sort()

	return (
		<div className={styles.wrapper_task_done}>
			<h1 className={styles.heading_task_done}>Wykonane:</h1>
			<div className={styles.box_tasks_done}>{taskDone}</div>
		</div>
	)
}

export default Task08done
