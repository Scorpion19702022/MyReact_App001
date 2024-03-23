import React from 'react'

import styles from './Task06country.module.css'

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
			<div className={styles.wrapper_contet}>
				<div className={styles.box_iputs}>
					<div className={styles.box_input}>
						<label className={styles.label}>Wybierz województwo:</label>
						<select className={styles.select}>{selectCountry}</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Task06country
