import React from 'react'

import styles from './Task02.module.css'
import T02list from './T02list'

import WomanMan from './assets/woman_man.png'

const Task02 = () => {
	return (
		<div className={styles.wrapper_task02}>
			<h1 className={styles.heading_task02}>Task 02</h1>
			<div className={styles.wrapper_task02_main}>
				<div className={styles.box_images}>
					<img src={WomanMan} alt='kobieta i mężczyzna' />
				</div>
				<T02list />
			</div>
		</div>
	)
}

export default Task02
