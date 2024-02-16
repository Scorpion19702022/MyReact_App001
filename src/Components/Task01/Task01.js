import React, { useState } from 'react'
import styles from './Task01.module.css'

const Task01 = () => {
	return (
		<div className={styles.wrapper_task01}>
			<h1>Task01</h1>
			<div className={styles.box}>
				<div className={styles.in}>
					<input type='text' value={info} onChange={handleChange} />
					<button className={styles.btn}>Kliknij</button>
				</div>
			</div>
		</div>
	)
}

export default Task01
