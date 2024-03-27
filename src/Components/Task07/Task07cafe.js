import React, { useContext } from 'react'

import styles from './Task07cafe.module.css'
import Task07context from './Context/Task07cotext'

const Task07cafe = () => {
	const {} = useContext(Task07context)

	return (
		<div className={styles.wrapper_cafe}>
			<div></div>
		</div>
	)
}

export default Task07cafe
