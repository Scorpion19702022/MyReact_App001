import React, { useContext } from 'react'

import styles from './Task05task2.module.css'
import Task05Context02 from './Context/Task05Context02'

const Task05task2 = () => {
	const {
		celsius,
		fare,
		intoInput,
		handleChangeInput,
		handleClickChange,
		handleClickReset,
		handleCountDegrees,
		resultDegrees,
		countIn,
		error,
		handleClosePopup,
	} = useContext(Task05Context02)

	return (
		<div className={styles.wrapper_task2}>
			<h2 className={styles.heading_task2}>Sprawdź ile stopni ℃ to stopni ℉ i odwrotnie</h2>
			<div className={styles.box_into}>
				<label className={styles.label}>
					Konwertuj z {celsius} na {fare}
				</label>
				<div className={styles.box_input_in}>
					{' '}
					<input className={styles.input} type='number' value={intoInput} onChange={handleChangeInput} />
					<p className={styles.kind_degrees}>{celsius}</p>
				</div>
			</div>
			<div className={styles.box_btns}>
				<button className={styles.btn} onClick={() => handleCountDegrees(celsius)}>
					Konwertuj
				</button>
				<button className={styles.btn} onClick={handleClickReset}>
					Reset
				</button>
				<button className={styles.btn} onClick={handleClickChange}>
					Zmień
				</button>
			</div>
			<div className={styles.box_info}>
				<h1 className={styles.heading_info}>Wynik:</h1>
				<p className={styles.info}>
					{countIn} {celsius} to: {resultDegrees} {fare}
				</p>
			</div>
			<div className={error ? styles.box_view_popup : styles.box_no_view_popup}>
				<h1 className={styles.heading_popup}>Nie podałeś wartości</h1>
				<button className={styles.btn_popup} onClick={handleClosePopup}>
					Zamknij
				</button>
			</div>
		</div>
	)
}

export default Task05task2
