import React from 'react'
import FirstTask01 from './FirstTask01'
import { AddFunctionsTask01Provider } from './Context/Task01Context'
import SecondTask01 from './SecondTask01'

import styles from './Task01.module.css'

const Task01 = () => {
	return (
		<div className={styles.wrapper_task01}>
			<h1 className={styles.heading_page}>Task01</h1>
			<div className={styles.main_task01}>
				<AddFunctionsTask01Provider>
					<FirstTask01 />
					<SecondTask01 />
				</AddFunctionsTask01Provider>
			</div>
		</div>
	)
}

export default Task01
