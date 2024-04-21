import React from 'react'

import styles from './Task09twoResult.module.css'

const Task09twoResult = () => {
	return (
		<div className={styles.wrapper_result}>
			<h1 className={styles.heading_list}>Ilość samochodów:</h1>
			<div className={styles.box_info}>
				<p className={styles.info}>INFORMACJA:</p>
				<p className={styles.info}>ble ble</p>
			</div>
			<div className={styles.box_result}></div>
		</div>
	)
}

export default Task09twoResult
