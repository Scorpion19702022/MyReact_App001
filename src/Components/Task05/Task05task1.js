import React from 'react'

import styles from './Task05task1.module.css'

const Task05task1 = () => {
	return (
		<div className={styles.task_01}>
			<h2 className={styles.task01_heading}>Oblicz</h2>
			<div className={styles.task01_box_inputs}>
				<label className={styles.task01_label}></label>
				<input className={styles.task01_input} type='text' />
				<label className={styles.task01_label}></label>
				<input className={styles.task01_input} type='text' />
				<label className={styles.task01_label}></label>
				<select name='' id=''>
					<option value='0'>Miasto</option>
					<option value=''>Łódź</option>
					<option value=''>Warszawa</option>
					<option value=''>Gdańsk</option>
					<option value=''>Kraków</option>
				</select>
			</div>
		</div>
	)
}

export default Task05task1
