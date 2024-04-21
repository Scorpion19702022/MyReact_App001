import React from 'react'

import styles from './Task09twoResult.css'

const Task09twoResult = () => {
	return (
		<div className={styles.wrapper_result}>
			<h1>Ilość samochodów:</h1>
			<div className={styles.box_info}>
				<p className={styles.info_one}>INFORMACJA:</p>
				<p className={styles.info_two}></p>
			</div>
			<div className={styles.box_result}></div>
		</div>
	)
}

export default Task09twoResult
