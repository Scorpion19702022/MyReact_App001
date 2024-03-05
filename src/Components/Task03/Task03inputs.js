import React, { useContext } from 'react'

import styles from './Task03inputs.module.css'
import CalculateContext from './Context/CalculateContext'

const Task03inputs = () => {
	const { dataWeight, handleChangeWeight } = useContext(CalculateContext)

	return (
		<div className={styles.box_inputs}>
			<label className={styles.label}>Wpisz swoją wagę:</label>
			<input className={styles.input} type='number' value={dataWeight} onChange={handleChangeWeight} min={0} />
			<label className={styles.label}>Wpisz swój wzrost:</label>
			<input className={styles.input} type='number' min={0} />
			<div className={styles.box_btns}>
				<button className={styles.btn_check}>Sprawdź</button>
				<button className={styles.btn_clean}>Wyczyść</button>
			</div>
		</div>
	)
}

export default Task03inputs
