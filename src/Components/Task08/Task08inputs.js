import React, { useContext } from 'react'

import styles from './Task08inputs.module.css'
import Task08context from './Context/Task08context'

const Task08inputs = () => {
	const { date } = useContext(Task08context)

	return (
		<div className={styles.wrapper_main}>
			<div className={styles.box_inputs}>
				<div className={styles.inputs_todo}>
					<div className={styles.box_input}>
						<label className={styles.label}>Wpisz zadanie:</label>
						<input type='text' />
					</div>
					<div className={styles.box_checkbox}>
						<label className={styles.label}>Priorytet:</label>
						<input type='checkbox' />
					</div>
					<div className={styles.box_date}>
						<label className={styles.label}>Data zrobienia</label>
						<input type='date' value={date} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Task08inputs
