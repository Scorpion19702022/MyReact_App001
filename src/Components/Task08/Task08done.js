import React, { useContext } from 'react'

import styles from './Task08done.module.css'
import Task08context from './Context/Task08context'

const Task08done = () => {
	const { taskDoneList, handleDeleteTask } = useContext(Task08context)

	const taskDone = taskDoneList.map(item => (
		<div className={styles.task_do_lists} key={item.id}>
			<div className={styles.tasks_do_important}>
				<h4 className={item.important ? styles.heading_important : styles.heading_no_important}>{item.task}</h4>
			</div>
			<div className={styles.task_do_dates}>
				<em className={styles.task_do_date}>{item.taskDate}</em>
			</div>
			<div className={styles.task_do_btns}>
				{item.button ? (
					<button className={styles.btn_do} onClick={() => handleDeleteTask(item.id)}>
						usuń
					</button>
				) : null}
			</div>
		</div>
	))

	return (
		<div className={styles.wrapper_task_done}>
			<h1 className={styles.heading_task_done}>Wykonane:</h1>
			{taskDone}
		</div>
	)
}

export default Task08done
