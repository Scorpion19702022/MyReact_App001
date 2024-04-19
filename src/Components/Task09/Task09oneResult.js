import React from 'react'

import styles from './Task09oneResult.module.css'

const Task09oneResult = () => {
	return (
		<div className={styles.wrapper_result}>
			<h2 className={styles.quiantity}>ilość osób:</h2>
			<div className={styles.errors}>
				<p className={styles.error_empty}></p>
				<p className={styles.error_quantity}></p>
			</div>
			<div className={styles.result}></div>
		</div>
	)
}

export default Task09oneResult
