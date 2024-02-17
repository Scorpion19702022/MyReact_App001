import React from 'react'
import styles from './Task01.module.css'

const Task01 = () => {
	return (
		<div className={styles.wrapper_task01}>
			<h1 className={styles.heading_page}>Task01</h1>
			<div className={styles.box_task01_a}>
				<div className={styles.box_task01_a1}>
					<h2 className={styles.heading_task01_a1}>Wyloguj literę</h2>
					<div className={styles.inputs_task01_a1}>
						<input type='text' />
						<button className={styles.btn_task01_a1}></button>
					</div>
					<h3 className={styles.result_task01_a1}>Twój wpis:</h3>
				</div>
			</div>
		</div>
	)
}

export default Task01
