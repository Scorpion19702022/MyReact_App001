import React, { useContext } from 'react'

import styles from './Task05task1.module.css'
import Task05Context01 from './Context/Task05Context01'

const Task05task1 = () => {
	const {
		person,
		handleChangePerson,
		youWere,
		handleChangeWere,
		city,
		handleChangeCity,
		handleClickClean,
		errorFill,
		handleClickCheck,
		infoVisit,
	} = useContext(Task05Context01)

	return (
		<div className={styles.task_01}>
			<h2 className={styles.task01_heading}>Czy byłeś tu?</h2>
			<div className={styles.task01_box_inputs}>
				<label className={styles.task01_label}>Wpisz imię:</label>
				<input className={styles.task01_input} type='text' value={person} onChange={handleChangePerson} />
				<label className={styles.task01_label}>Wpisz misato:</label>
				<input className={styles.task01_input} type='text' value={city} onChange={handleChangeCity} />
				<label className={styles.task01_label}>Byłeś?</label>
				<select onChange={handleChangeWere} value={youWere} className={styles.task01_select} name='' id=''>
					<option value='Change'>Wybierz</option>
					<option value='Yes'>Tak</option>
					<option value='No'>Nie</option>
				</select>
			</div>
			<div className={styles.task01_box_btns}>
				<button className={styles.task01_btn} onClick={() => handleClickCheck(youWere)}>
					Sprawdź
				</button>
				<button className={styles.task01_btn} onClick={handleClickClean}>
					Wyczyść
				</button>
			</div>
			<div className={styles.box_info}>
				<p className={styles.info}>
					{infoVisit.text01} {infoVisit.name} {infoVisit.text02} {infoVisit.visit} {infoVisit.city}
				</p>
				<p className={styles.error}>{errorFill}</p>
			</div>
		</div>
	)
}

export default Task05task1
