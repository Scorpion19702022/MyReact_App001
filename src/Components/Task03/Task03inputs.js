import React, { useContext } from 'react'

import styles from './Task03inputs.module.css'
import CalculateContext from './Context/CalculateContext'
import Task03info from './Task03info'

const Task03inputs = () => {
	const { dataWeight, dataTall, handleChangeWeight, handleChangeTall, handleClickReset, handleResult } =
		useContext(CalculateContext)

	return (
		<div className={styles.box_inputs}>
			<label className={styles.label}>Wpisz swój wzrost:</label>
			<input className={styles.input} type='number' value={dataTall} min={0} onChange={handleChangeTall} />
			<label className={styles.label}>Wpisz swoją wagę:</label>
			<input className={styles.input} type='number' value={dataWeight} onChange={handleChangeWeight} min={0} />
			<div className={styles.box_btns}>
				<button className={styles.btn} onClick={handleResult}>
					Sprawdź
				</button>
				<button className={styles.btn} onClick={handleClickReset}>
					Wyczyść
				</button>
			</div>
			<Task03info />
		</div>
	)
}

export default Task03inputs
