import React from 'react'

import styles from './Task09two.module.css'
import Task09twoResult from './Task09twoResult'

const Task09two = () => {
	return (
		<div className={styles.wrapper_task_two}>
			<h1 className={styles.task_two_heading}>Zadanie drugie</h1>
			<div className={styles.box_inputs}>
				<label className={styles.label}>wpisz markę samochodu:</label>
				<input className={styles.input} type='text' />
				<label className={styles.label}>Podaj rok produkcji:</label>
				<input className={styles.input} type='number' />
				<div className={styles.box_btns}>
					<button className={styles.btn}>Dodaj</button>
				</div>
			</div>
			<Task09twoResult />
		</div>
	)
}

export default Task09two
