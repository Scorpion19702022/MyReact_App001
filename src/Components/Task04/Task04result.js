import React from 'react'

import styles from './Task04result.module.css'

const Task04result = () => {
	return (
		<div className={styles.wrapper_result}>
			<div className={styles.box_result_salary}>
				<h1 className={styles.heading_salary}>
					Twoje wynagrodzenie: <span className={styles.heading_salary_result}></span>
				</h1>
			</div>
			<div className={styles.box_all_info}>
				<h3 className={styles.heading_info}>Składki:</h3>
			</div>
		</div>
	)
}

export default Task04result
