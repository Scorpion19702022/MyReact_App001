import React, { useContext } from 'react'

import styles from './Task05task2.module.css'
import Task05Context02 from './Context/Task05Context02'

const Task05task2 = () => {
	const { celsius, fare } = useContext(Task05Context02)

	return (
		<div className={styles.wrapper_task2}>
			<h2 className={styles.heading_task2}>Sprawdź ile stopni ℃ to stopni ℉ i odwrotnie</h2>
			<div className={styles.box_into}>
				<label className={styles.label}>
					Konwertuj z {celsius} na {fare}
				</label>
				<input className={styles.input} type='number' />
			</div>
			<div className={styles.box_btns}>
				<button className={styles.btn}>Konwertuj</button>
				<button className={styles.btn}>Reset</button>
				<button className={styles.btn}>Zmień</button>
			</div>
			<div className={styles.box_info}>
				<h1 className={styles.heading_info}>Wynik:</h1>
				<p className={styles.info}>2</p>
			</div>
		</div>
	)
}

export default Task05task2
