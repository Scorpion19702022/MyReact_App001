import React, { useState } from 'react'
import styles from './Task01.module.css'

const Task01 = () => {
	const [info, setInfo] = useState('')

	const handleChange = e => {
		setInfo(e.target.value)
	}

	return (
		<div className={styles.wrapper_task01}>
			<h1>Task01</h1>
			<div className={styles.box}>
				<div className={styles.in}>
					<input type='text' value={info} onChange={handleChange} />
					<button className={styles.btn}>Kliknij</button>
				</div>
				<h4>Tekst po kliknięciu: {info}</h4>
			</div>
		</div>
	)
}

export default Task01
