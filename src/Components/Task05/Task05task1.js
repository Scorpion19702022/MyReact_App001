import React, { useContext } from 'react'

import styles from './Task05task1.module.css'
import Task05Context01 from './Context/Task05Context01'

const Task05task1 = () => {
	const { person, handleChangePerson, youWere, handleChangeWere } = useContext(Task05Context01)

	// console.log(person)

	console.log(youWere)

	return (
		<div className={styles.task_01}>
			<h2 className={styles.task01_heading}>Oblicz</h2>
			<div className={styles.task01_box_inputs}>
				<label className={styles.task01_label}>Wpisz imię:</label>
				<input className={styles.task01_input} type='text' onChange={handleChangePerson} />
				<label className={styles.task01_label}>Wpisz misato:</label>
				<input className={styles.task01_input} type='text' />
				<label className={styles.task01_label}>Byłeś?</label>
				<select onChange={handleChangeWere} value={youWere} className={styles.task01_select} name='' id=''>
					<option value='Change'>Wybierz</option>
					<option value='Yes'>Tak</option>
					<option value='No'>Nie</option>
				</select>
			</div>
		</div>
	)
}

export default Task05task1
