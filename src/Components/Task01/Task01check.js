import React from 'react'

import styles from './Task01.module.css'

const Task01check = () => {
	return (
		<div className={styles.wrapper_checkbox}>
			<h1 className={styles.heading_check}>Test z zastosowaiem checkboxa</h1>
			<div className={styles.box_check}>
				<div className={styles.label_input}>
					<label className={styles.label_check}>podaj swoje imię</label>
					<input className={styles.input_check} type='text' />
					<p className={styles.check_error}></p>
				</div>
				<div className={styles.label_checks}>
					<label className={styles.label_check}>Masz 18 lat?</label>
					<input className={styles.input_check_alone} type='checkbox' />
				</div>
				<div className={styles.btns_check}>
					<button className={styles.btn_check}>sprawdź</button>
				</div>
			</div>
			<div className={styles.check_results}>
				<h2 className={styles.check_result}></h2>
			</div>
			<p className={styles.task_check_success}></p>
		</div>
	)
}

export default Task01check
