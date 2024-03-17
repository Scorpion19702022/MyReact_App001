import React from 'react'

import styles from './Task05task3.module.css'

const Task05task3 = () => {
	return (
		<div className={styles.wrapper_task3_holidays}>
			<h1 className={styles.heading_holidays}>Moje wakacje!</h1>
			<div className={styles.box_inputs}>
				<label className={styles.label}>Podaj imię:</label>
				<input className={styles.input} type='text' />
				<div className={styles.box_selects}>
					<div className={styles.selects_cities}>
						<label className={styles.label}>Wybierz miejsce</label>
						<select className={styles.select} name='City'>
							<option value='cities'>wybierz miasto</option>
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
					<div className={styles.selects_person}>
						<label className={styles.label}>Wybierz osoby</label>
						<select className={styles.select} name='person'>
							<option value='persons'>Z kim byłeś</option>
							<option value='person01'>z Beatą</option>
							<option value='person02'>z Dorotą</option>
							<option value='person03'>z Aśką</option>
							<option value='person04'>z Rodzicami</option>
							<option value='person05'>z Beatą i z Dorotą</option>
							<option value='person05'>z Dorotą i z Aśką</option>
							<option value='person05'>z Dorotą i z Rodzicami</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Task05task3
