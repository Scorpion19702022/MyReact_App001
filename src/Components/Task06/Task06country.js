import React from 'react'

import styles from './Task06country.module.css'
import Task06result from './Task06result'

const Task06country = () => {
	const countryPoland = {
		countries: 'wybierz województwo',
		country01: 'dolnośląskie',
		country02: 'kujawsko-pomorskie',
		country03: 'lubelskie',
		country04: 'lubuskie',
		country05: 'łódzkie',
		country06: 'małopolskie',
		country07: 'mazowieckie',
		country08: 'opolskie',
		country09: 'podkarpackie',
		country10: 'podlaskie',
		country11: 'pomorskie',
		country12: 'śląskie',
		country13: 'świętokrzyskie',
		country14: 'warmińsko-mazurskie',
		country15: 'wielkopolskie',
		country16: 'zachodniopomorskie',
	}

	const selectCountry = Object.entries(countryPoland).map(([value, countryName]) => (
		<option key={value} value={value}>
			{countryName}
		</option>
	))

	return (
		<div className={styles.wrapper_country}>
			<h1 className={styles.heading_country}>Województwa w Polsce. Wybierz i przeczytaj opis</h1>
			<div className={styles.wrapper_content}>
				<div className={styles.box_inputs}>
					<div className={styles.box_input}>
						<label className={styles.label}>Wybierz województwo:</label>
						<select className={styles.select}>{selectCountry}</select>
					</div>
					<div className={styles.box_check}>
						<label className={styles.label}>Zaznacz jeżeli chcesz sprawdzić stolicę</label>
						<input className={styles.input} type='checkbox' />
					</div>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn}>Sprawdź</button>
					<button className={styles.btn}>Wyczyść</button>
				</div>
				<Task06result />
			</div>
		</div>
	)
}

export default Task06country
