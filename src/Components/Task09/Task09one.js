import React from 'react'

import styles from './Task09one.module.css'

const Task09one = () => {
	return (
		<div className={styles.wrapper_task_one}>
			<h1 className={styles.task_one_heading}>Zadanie pierwsze</h1>
			<div className={styles.box_inputs}>
				<label className={styles.label}>Podaj imię</label>
				<input className={styles.input} type='text' />
				<label className={styles.label}>Podaj nazwisko</label>
				<input className={styles.input} type='text' />
				<label className={styles.label}>Podaj wiel</label>
				<input className={styles.input} type='number' min={18} />
				<div className={styles.btns_add}>
					<button className={styles.btn_add}>Dodaj</button>
				</div>
			</div>
		</div>
	)
}

export default Task09one
