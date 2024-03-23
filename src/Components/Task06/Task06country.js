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

	// const selectCountry = Object.values(countryPoland)
	const selectCountry = Object.entries(countryPoland)

	console.log(selectCountry)

	return (
		<div className={styles.wrapper_country}>
			<h1 className={styles.heading_country}>Województwa w Polsce. Wybierz i przeczytaj opis</h1>
		</div>
	)
}

export default Task06country
