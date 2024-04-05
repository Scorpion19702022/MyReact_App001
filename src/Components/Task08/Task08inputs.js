import React, { useContext } from 'react'

import styles from './Task08inputs.module.css'
import Task08context from './Context/Task08context'

const Task08inputs = () => {
	const { date } = useContext(Task08context)

	return (
		<div className={styles.wrapper_main}>
			<div className={styles.box_inputs}>
				<div className={styles.inputs_todo}>
					<div className={styles.inputs}>
						<div className={styles.box_input}>
							<label className={styles.label}>Wpisz zadanie:</label>
							<input className={styles.inp} type='text' />
						</div>
						<div className={styles.box_checkbox}>
							<label className={styles.check_label}>Priorytet:</label>
							<input className={styles.check_box} type='checkbox' />
						</div>
					</div>
					<div className={styles.box_date}>
						<div className={styles.date}>
							<label className={styles.date_label}>Data zrobienia:</label>
							<input className={styles.inp_date} type='date' value={date} min={date} />
						</div>
					</div>
					<button className={styles.btn_add}>Dodaj</button>
				</div>
			</div>
		</div>
	)
}

export default Task08inputs
