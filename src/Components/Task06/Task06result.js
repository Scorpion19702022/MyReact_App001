import React, { useContext } from 'react'

import styles from './Task06result.module.css'
import ActionCountryContext from './Context/ActionCountryContext'

const Task06result = () => {
	const { country } = useContext(ActionCountryContext)

	return (
		<div className={styles.wrapper_result}>
			<h1 className={styles.capital_info}>
				{' '}
				Stolicą województwa <span className={styles.span}></span> jest <span className={styles.span}></span>
			</h1>
		</div>
	)
}

export default Task06result
