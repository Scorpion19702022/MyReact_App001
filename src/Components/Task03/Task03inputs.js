import React, { useContext } from 'react'

import styles from './Task03inputs.module'

const Task03inputs = () => {
	const {} = useContext()

	return (
		<div className={styles.box_inputs}>
			<label htmlFor=''></label>
			<input type='text' />
			<label htmlFor=''></label>
			<input type='text' />
			<div className={styles.box_btns}>
				<button className={styles.btn_check}>Sprawdź</button>
				<button className={styles.btn_clean}>Wyczyść</button>
			</div>
		</div>
	)
}

export default Task03inputs
