import React, { useContext } from 'react'

import styles from './Task09oneResult.module.css'
import Task09oneContext from './Context/Task09oneContext'

const Task09oneResult = () => {
	const { person } = useContext(Task09oneContext)

	console.log(person)

	return (
		<div className={styles.wrapper_result}>
			<h2 className={styles.quantity}>ilość osób: {person.length}</h2>
			<div className={styles.errors}>
				<p className={styles.error_empty}></p>
				<p className={styles.error_quantity}></p>
			</div>
			<div className={styles.result}></div>
		</div>
	)
}

export default Task09oneResult
