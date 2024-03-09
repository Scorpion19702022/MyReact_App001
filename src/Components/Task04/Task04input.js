import React from 'react'

import styles from './Task04input.module.css'

const Task04input = () => {
	return (
		<div className={styles.wrapper_inputs}>
			<h1 className={styles.heading_input}>Wynagrodzenie minimalne brutto na umowę o pracę wynosi 4242 zł</h1>
			<div className={styles.box_inputs}>
				<div className={styles.box_input}>
					<label className={styles.label_input}>Wpisz swoje wynagrodzenie brutto:</label>
					<input className={styles.input_input} type='number' min={4242} />
				</div>
				<div className={styles.btns_input}>
					<button className={styles.btn_input}>Sprawdź</button>
					<button className={styles.btn_input}>Wyczyść</button>
				</div>
			</div>
		</div>
	)
}

export default Task04input
