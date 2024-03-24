import React, { useContext } from 'react'

import styles from './Task06result.module.css'
import ActionCountryContext from './Context/ActionCountryContext'

const Task06result = () => {
	const { infoCountry } = useContext(ActionCountryContext)

	return (
		<div className={styles.wrapper_result}>
			<h1 className={styles.heading_country}>
				Województwo: <span className={styles.span}>{infoCountry.country}</span>
			</h1>
			<h3 className={styles.capital_info}>
				{' '}
				Stolicą województwa jest: <span className={styles.span}>{infoCountry.capital}</span>
			</h3>
			<p className={styles.text}>
				Informacja: <span className={styles.span}>{infoCountry.info}</span>
			</p>
		</div>
	)
}

export default Task06result
