import React, { useContext } from 'react'

import styles from './Task06result.module.css'
import ActionCountryContext from './Context/ActionCountryContext'

const Task06result = () => {
	const { infoCountry } = useContext(ActionCountryContext)

	return (
		<div className={styles.wrapper_result}>
			<h1 className={styles.heading_country}>
				Województwo <span className={styles.span}>{infoCountry.country}</span>
			</h1>
			<p className={styles.area_info}>
				Obszar: <span className={styles.span}>{infoCountry.area}</span>
			</p>
			<p className={styles.people_info}>
				Mieszkańców: <span className={styles.span}>{infoCountry.people}</span>
			</p>
			<p className={styles.density_info}>
				Zaludnienie na 1 km: <span className={styles.span}>{infoCountry.density}</span>
			</p>
			<p className={styles.capital_info}>
				{' '}
				Stolica województwa: <span className={styles.span}>{infoCountry.capital}</span>
			</p>
			<p className={styles.peopleCapital_info}>
				{' '}
				Mieszkaców w stolicy: <span className={styles.span}>{infoCountry.peopleCapital}</span>
			</p>
		</div>
	)
}

export default Task06result
