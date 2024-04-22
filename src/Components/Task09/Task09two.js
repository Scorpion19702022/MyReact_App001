import React, { useContext } from 'react'

import styles from './Task09two.module.css'
import Task09twoResult from './Task09twoResult'
import Task09twoContext from './Context/Task09twoContext'

const Task09two = () => {
	const { car, yearCar } = useContext(Task09twoContext)

	return (
		<div className={styles.wrapper_task_two}>
			<h1 className={styles.task_two_heading}>Zadanie drugie</h1>
			<div className={styles.box_inputs}>
				<label className={styles.label}>wpisz markę samochodu:</label>
				<input className={styles.input} type='text' value={car} />
				<label className={styles.label}>Podaj rok produkcji:</label>
				<input className={styles.input} type='number' value={yearCar} />
				<div className={styles.box_btns}>
					<button className={styles.btn}>Dodaj</button>
				</div>
			</div>
			<Task09twoResult />
		</div>
	)
}

export default Task09two
