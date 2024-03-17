import React from 'react'

import styles from './Task05task3.module.css'

const Task05task3 = () => {
	return (
		<div className={styles.wrapper_task3_holidays}>
			<h1 className={styles.heading_holidays}>Moje wakacje!</h1>
			<div className={styles.box_inputs}>
				<div className={styles.inputs}>
					<label className={styles.label}>Podaj imię:</label>
					<input className={styles.input} type='text' />
				</div>
				<div className={styles.box_selects}>
					<div className={styles.selects}>
						<label className={styles.label}>Wybierz miejsce:</label>
						<select className={styles.select} name='City'>
							<option value='cities'>Wybierz miasto</option>
							<option value='city01'>Dźwirzyno</option>
							<option value='city03'>Ustroie Morskie</option>
							<option value='city04'>Darłówek</option>
							<option value='city05'>Łeba</option>
							<option value='city06'>Władysławowo</option>
							<option value='city07'>Trójmiasto</option>
							<option value='city08'>Przechlewo</option>
							<option value='city09'>Piławki</option>
							<option value='city10'>Wola</option>
							<option value='city11'>Borki</option>
							<option value='city12'>Wawrzkowizna</option>
							<option value='city13'>Jaworznik i okolice</option>
							<option value='city14'>Zakopane</option>
							<option value='city15'>Ustroń</option>
							<option value='city16'>Szklarska Poręba</option>
							<option value='city17'>Dżerba</option>
							<option value='city18'>Costa Brava</option>
							<option value='city19'>Włochy/Sycylia</option>
						</select>
					</div>
					<div className={styles.selects}>
						<label className={styles.label}>Wybierz osoby:</label>
						<select className={styles.select} name='person'>
							<option value='persons'>Z kim byłeś</option>
							<option value='person01'>z Beatą</option>
							<option value='person02'>z Dorotą</option>
							<option value='person03'>z Aśką</option>
							<option value='person04'>z Rodzicami</option>
							<option value='person05'>z Beatą i z Dorotą</option>
							<option value='person06'>z Dorotą i z Aśką</option>
							<option value='person07'>z Dorotą i z Rodzicami</option>
							<option value='person08'>z Beatą i z Dorotą i z Aśką</option>
						</select>
					</div>
				</div>
				<div className={styles.selects}>
					<label className={styles.label}>Poziom zadowolenia:</label>
					<select className={styles.select} name='rating'>
						<option value='ratings'>Oceń pobyt</option>
						<option value='rating01'>1</option>
						<option value='rating02'>2</option>
						<option value='rating03'>3</option>
						<option value='rating04'>4</option>
						<option value='rating05'>5</option>
					</select>
				</div>
				<div className={styles.box_text}>
					<label className={styles.label}>Twój krótki opis:</label>
					<textarea className={styles.textarea} name='text'></textarea>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn}>Sprawdź</button>
					<button className={styles.btn}>Wyczyść</button>
				</div>
			</div>
		</div>
	)
}

export default Task05task3
