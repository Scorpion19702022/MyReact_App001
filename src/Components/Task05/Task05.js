import React from 'react'

import styles from './Task05.module.css'
import Task05task1 from './Task05task1'
import { ActionTaskContext01 } from './Context/Task05Context01'
import Task05task2 from './Task05task2'
import { ActionTaskContext02 } from './Context/Task05Context02'

const Task05 = () => {
	return (
		<div className={styles.wrapper_task05}>
			<div className={styles.header_task05}>
				<h1 className={styles.heading_task05}>Task 05</h1>
				<h4 className={styles.theme_task05}>Test z inputami</h4>
			</div>
			<div className={styles.box_tasks}>
				<div className={styles.box_task_left}>
					<ActionTaskContext01>
						<Task05task1 />
					</ActionTaskContext01>
					<ActionTaskContext02>
						<Task05task2 />
					</ActionTaskContext02>
				</div>
			</div>
		</div>
	)
}

export default Task05
