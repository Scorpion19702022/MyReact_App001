import React from 'react'

import styles from './Task05task1.module.css'

const Task05task1 = () => {
	return (
		<div className={styles.task_01}>
			<h2 className={styles.task01_heading}>Oblicz</h2>
			<div className={styles.task01_box_inputs}>
				<label className={styles.task01_label}>Wpisz imię:</label>
				<input className={styles.task01_input} type='text' />
				<label className={styles.task01_label}>Wpisz misato:</label>
				<input className={styles.task01_input} type='text' />
				<label className={styles.task01_label}>Byłeś?</label>
				<select className={styles.task01_select} name='' id=''>
					<option value='Change'>Wybierz</option>
					<option value='Yes'>Tak</option>
					<option value='No'>Nie</option>
				</select>
			</div>
		</div>
	)
}

export default Task05task1
