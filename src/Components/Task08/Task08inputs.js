import React, { useContext } from 'react'

import styles from './Task08inputs.module.css'
import Task08context from './Context/Task08context'

const Task08inputs = () => {
	const { test } = useContext(Task08context)

	return (
		<div className={styles.wrapper_inputs}>
			<h1>{test}</h1>
		</div>
	)
}

export default Task08inputs
