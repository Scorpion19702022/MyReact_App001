import React, { useContext } from 'react'

import styles from './Task03inputs.module.css'

const Task03inputs = () => {
	const { dataWeight, handleChangeWeight } = useContext()

	return (
		<div className={styles.box_inputs}>
			<label></label>
			<input type='number' value={dataWeight} onChange={handleChangeWeight} />
			<label></label>
			<input type='number' />
			<div className={styles.box_btns}>
				<button className={styles.btn_check}>Sprawdź</button>
				<button className={styles.btn_clean}>Wyczyść</button>
			</div>
		</div>
	)
}

export default Task03inputs
