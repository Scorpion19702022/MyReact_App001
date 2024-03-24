import React, { useContext } from 'react'

import styles from './Task06result.module.css'
import ActionCountryContext from './Context/ActionCountryContext'

const Task06result = () => {
	const {} = useContext(ActionCountryContext)

	return (
		<div className={styles.wrapper_result}>
			<h1 className={styles.heading_country}>
				Województwo: <span className={styles.span}></span>
			</h1>
			<h3 className={styles.capital_info}>
				{' '}
				Stolicą województwa <span className={styles.span}></span> jest: <span className={styles.span}></span>
			</h3>
			<p className={styles.text}>
				Informacja: <span className={styles.span}></span>
			</p>
		</div>
	)
}

export default Task06result
