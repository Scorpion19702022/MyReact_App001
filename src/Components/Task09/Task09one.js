import React, { useContext } from 'react'

import styles from './Task09one.module.css'
import Task09oneResult from './Task09oneResult'
import Task09oneContext from './Context/Task09oneContext'

const Task09one = () => {
	const {
		firstName,
		lastName,
		age,
		year,
		handleChangeFirstName,
		handleChangeLastName,
		handleChangeAge,
		handlePersonResult,
	} = useContext(Task09oneContext)

	console.log(year)

	return (
		<div className={styles.wrapper_task_one}>
			<h1 className={styles.task_one_heading}>Zadanie pierwsze</h1>
			<div className={styles.box_inputs}>
				<label className={styles.label}>Podaj imię</label>
				<input className={styles.input} type='text' value={firstName} onChange={handleChangeFirstName} />
				<label className={styles.label}>Podaj nazwisko</label>
				<input className={styles.input} type='text' value={lastName} onChange={handleChangeLastName} />
				<label className={styles.label}>Podaj datę urodzenia</label>
				<input
					className={styles.input}
					type='number'
					value={age}
					max={year}
					min={year - 100}
					onChange={handleChangeAge}
				/>
				<div className={styles.btns_add}>
					<button className={styles.btn_add} onClick={handlePersonResult}>
						Dodaj
					</button>
				</div>
			</div>
			<Task09oneResult />
		</div>
	)
}

export default Task09one
